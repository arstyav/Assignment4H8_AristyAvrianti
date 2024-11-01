// Load data from localStorage on page load
window.onload = function() {
    displayProfile();
};

// Display profile data
function displayProfile() {
    const profile = JSON.parse(localStorage.getItem('profileData')) || {
        name: 'Nama Anda',
        role: 'Front End Designer',
        availability: 'Full Time',
        age: 19,
        location: 'Jakarta',
        experience: 2,
        email: 'email@gmail.com'
    };

    document.getElementById('nameDisplay').textContent = profile.name;
    document.getElementById('roleDisplay').textContent = profile.role;
    document.getElementById('availabilityDisplay').textContent = profile.availability;
    document.getElementById('ageDisplay').textContent = profile.age;
    document.getElementById('locationDisplay').textContent = profile.location;
    document.getElementById('experienceDisplay').textContent = profile.experience;
    document.getElementById('emailDisplay').textContent = profile.email;
}

// Show the form with current data
function showForm() {
    const profile = JSON.parse(localStorage.getItem('profileData')) || {};
    document.getElementById('nameInput').value = profile.name || '';
    document.getElementById('roleInput').value = profile.role || '';
    document.getElementById('availabilityInput').value = profile.availability || '';
    document.getElementById('ageInput').value = profile.age || '';
    document.getElementById('locationInput').value = profile.location || '';
    document.getElementById('experienceInput').value = profile.experience || '';
    document.getElementById('emailInput').value = profile.email || '';

    document.getElementById('editForm').style.display = 'block';
}

// Update profile data on form submit
function updateProfile(event) {
    event.preventDefault();

    const updatedProfile = {
        name: document.getElementById('nameInput').value,
        role: document.getElementById('roleInput').value,
        availability: document.getElementById('availabilityInput').value,
        age: document.getElementById('ageInput').value,
        location: document.getElementById('locationInput').value,
        experience: document.getElementById('experienceInput').value,
        email: document.getElementById('emailInput').value
    };

    localStorage.setItem('profileData', JSON.stringify(updatedProfile));
    document.getElementById('editForm').style.display = 'none';
    displayProfile();
}
