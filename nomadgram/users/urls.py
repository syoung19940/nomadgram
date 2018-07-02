from django.urls import path

from . import views

app_name = "users"
urlpatterns = [
    path(
        'login/facebook/',
        view = views.FacebookLogin.as_view(),
        name='fb_login'
    ),
    path(
        "explore",
        view = views.ExploreUser.as_view(),
        name = "explore_user"
    ),
    path(
        "<int:user_id>/follow/",
        view = views.FollowUser.as_view(),
        name = "follow_user"
    ),
    path(
        "<int:user_id>/unfollow/",
        view = views.UnFollowUser.as_view(),
        name = "unfollow_user"
    ),
    path(
        "<str:username>/followers/",
        view = views.UserFollowers.as_view(),
        name = "user_followers"
    ),
    path(
        "<str:username>/following/",
        view = views.UserFollowing.as_view(),
        name = "user_following"
    ),
    path(
        "search",
        view = views.Search.as_view(),
        name = "user_search"
    ),
    path(
        "<str:username>/",
        view = views.UserProfile.as_view(),
        name = "user_profile"
    ),
    path(
        "<str:username>/password/",
        view = views.ChangePassword.as_view(),
        name = "change_password"
    )
]


"""
example
    path("", view=views.UserListView.as_view(), name="list"),
    path("~redirect/", view=views.UserRedirectView.as_view(), name="redirect"),
    path("~update/", view=views.UserUpdateView.as_view(), name="update"),
    path(
        "<str:username>/",
        view=views.UserDetailView.as_view(),
        name="detail",
    ),
"""