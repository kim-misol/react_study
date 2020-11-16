from functools import wraps

from flask import (
    Blueprint, redirect, render_template, session, url_for
)
from flask_login import current_user, login_user
from .forms import LoginForm, SignUpForm
from platform.models import User
from platform import db, login_manager
from datetime import datetime

bp = Blueprint('auth', __name__, url_prefix='/')
login_manager.login_view = "login"


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)


@bp.route('/signup', methods=('GET', 'POST'))
def signup():
    form = SignUpForm()
    if form.validate_on_submit():
        now = datetime.now()
        created_at = now.strftime("%Y-%m-%d %H:%M:%S")
        new_admin = User(email=form.email.data, password=form.password.data,
                         username=form.username.data, created_at=created_at)
        db.session.add(new_admin)
        db.session.commit()
        return redirect(url_for('auth.login'))

    return render_template('auth/signup.html', form=form)


@bp.route('/login', methods=('GET', 'POST'))
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first_or_404()
        if user.check_password(form.password.data):
            if form.remember_me.data:
                login_user(user, remember=True)
            else:
                login_user(user)
            return redirect(url_for('post.get_posts'))

    return render_template('auth/login.html', form=form)


@bp.route('/logout')
def logout():
    session.clear()
    return redirect(url_for('login'))


def login_required(view):
    @wraps(view)
    def wrap(*args, **kwargs):
        if current_user is None:
            return redirect(url_for('auth.login'))

        return view(*args, **kwargs)
    return wrap

