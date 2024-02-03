
# Create your views here.

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import UserProfile
from .forms import UserProfileForm  # Import your UserProfileForm

@login_required
def my_profile(request):
    try:
        user_profile = UserProfile.objects.get(user=request.user)
    except UserProfile.DoesNotExist:
        # If UserProfile doesn't exist, create one
        user_profile = UserProfile.objects.create(
            user=request.user,
            name=request.user.username,  # Assuming username as name
            email=request.user.email
        )
        # You may want to redirect to a page where users can update their profile info
        return redirect('update_profile')  # Add a URL named 'update_profile'

    return render(request, 'profiles/my_profile.html', {'user_profile': user_profile})



@login_required
def update_profile(request):
    user_profile = UserProfile.objects.get(user=request.user)
    if request.method == 'POST':
        form = UserProfileForm(request.POST, request.FILES, instance=user_profile)
        if form.is_valid():
            form.save()
            return redirect('my_profile')
    else:
        form = UserProfileForm(instance=user_profile)
    return render(request, 'profiles/update_profile.html', {'form': form})