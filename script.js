
document.addEventListener('DOMContentLoaded', function() {
    var images = [
        'img/c-.jpg',
        'img/c.jpg',
        'img/cat-0.jpg',
        'img/cat-1.jpg',
        'img/cat-2.jpg',
        'img/cat-3.jpg',
        'img/cat-4.jpg',
        'img/cat-5.jpg'
    ];
    
    var catImg = document.querySelector('.cat-img');
    function startImageRotation() {
        intervalId = setInterval(function() {
            var randomImg = Math.floor(Math.random() * images.length);
            catImg.src = images[randomImg];
        }, 500);
    }
    
    // Memanggil fungsi untuk memulai interval saat halaman dimuat
    startImageRotation();

    var btnNo = document.querySelector('.btn--no');
    
    btnNo.addEventListener('click', function() {
        var position = ['10', '40', '70', '100', '130', '-10', '-40', '-70', '-100', '-130'];
        var randomPosition = Math.floor(Math.random() * position.length);
        var position2 = ['10', '40', '70', '100', '130', '-10', '-40', '-70', '-100', '-130', '-160', '-190'];
        var randomPosition2 = Math.floor(Math.random() * position.length);
        btnNo.style.transform = `translate(${position[randomPosition]}px,${position2[randomPosition2]}px)`;
        
        
    });

    var word = [
        "Please",
        "Are you sure?",
        "No",
        "Don't do this to me",
        "You broke my heart",
        "I'm gonna cry...",
        "I still love you Lia❤️"
    ];
    var currentIndex = 0;
    
    btnNo.addEventListener('click', function() {
        var btnNo = document.querySelector('.btn--no');
        btnNo.textContent = word[currentIndex];
        currentIndex = (currentIndex + 1) % word.length;
    });

    
    var btnYes = document.querySelector('.btn--yes');
    btnYes.addEventListener('click', function() {
        var title = document.querySelector('.title');
        var buttonYes = document.querySelector('.btn.btn--yes');
        var buttonNo = document.querySelector('.btn.btn--no');
        var reply = document.querySelector('.reply');
        var mail = document.querySelector('.mail');

        // Menghentikan interval
        clearInterval(intervalId);
        
        // Mengubah elemen menjadi saat yes ditekan
        catImg.src = "img/cat-yes.jpg";
        buttonYes.style.display = "none";
        buttonNo.style.display = "none";
        title.textContent = "YEAAAYYY!!! MAKASIH LIAA😘";
        reply.textContent = "Balas :"
        mail.src = "https://cdn3.iconfinder.com/data/icons/dating-app-wildberry-vol-1/256/Love_Letter-512.png";
        mail.style.width = "150px";
        mail.style.marginTop = "-30px"

        mail.addEventListener('click', function() {
            window.open("https://wa.me/6285156346349?text=Makasih+ya+zii+ganteng");
        });
    });
    
});