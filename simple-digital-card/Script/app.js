document.addEventListener('DOMContentLoaded', function () {
    const profileContainer = document.getElementById('profileContainer');
    const callDiv = document.getElementById('mob');
    const mailDiv = document.getElementById('mail');
  
    // Populate profile details
    document.querySelector('.title').textContent = details.name;
    document.querySelector('.designation').textContent = `${details.designation} - ${details.department}`;
    document.querySelector('.code').textContent = `CODE: ${details.code}`;
    document.querySelectorAll('.pos')[0].textContent = `${details.department}`;
    document.querySelectorAll('.pos')[1].textContent = `${details.branch}`;
    document.querySelectorAll('.pos')[2].textContent = `${details.valid_date}`;
    document.querySelector('#mob').textContent = details.mob_no;
    mailDiv.textContent = details.email;
  
    // Event listeners for call and mail
    callDiv.addEventListener('click', function () {
      window.location.href = `tel:${details.mob_no}`;
    });
  
    mailDiv.addEventListener('click', function () {
      window.location.href = `mailto:${details.email}`;
    });



    const profileImage = document.getElementById("profileImage");
    const profileImageInput = document.getElementById("profileImageInput");
  
    // Add event listener to the input element
    profileImageInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

  });