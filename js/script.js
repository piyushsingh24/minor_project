

$(document).ready(function () {
    $('.feedback-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ["<i class = 'fas fa-arrow-left'></i>", "<i class = 'fas fa-arrow-right'></i>"]
    });

    // stop animation on resize
    let resizeTimer;
    $(window).resize(function () {
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    $('.navbar-show-btn').click(function () {
        $('.navbar-box').addClass('navbar-box-show');
        // update ARIA state for accessibility
        $('.navbar-show-btn').attr('aria-expanded', 'true');
        $('.navbar-hide-btn').attr('aria-expanded', 'true');
    });

    $('.navbar-hide-btn').click(function () {
        $('.navbar-box').removeClass("navbar-box-show");
        // update ARIA state for accessibility
        $('.navbar-show-btn').attr('aria-expanded', 'false');
        $('.navbar-hide-btn').attr('aria-expanded', 'false');
    })

    // Smooth scroll to section when nav links are clicked
    $('.navbar-nav .nav-link').on('click', function (e) {
        const href = $(this).attr('href');
        if (href && href.startsWith('#') && $(href).length) {
            e.preventDefault();
            const target = $(href);
            $('html, body').animate({ scrollTop: target.offset().top }, 500);
            // update active state
            $('.nav-link').removeClass('nav-active');
            $(this).addClass('nav-active');
            // close mobile navbar if open
            $('.navbar-box').removeClass('navbar-box-show');
            $('.navbar-show-btn, .navbar-hide-btn').attr('aria-expanded', 'false');
        }
    });

    // Scroll-spy: update active nav item on scroll
    const sectionIds = ['#home', '#services', '#providers', '#apps', '#testimonials', '#articles', '#about'];
    $(window).on('scroll', function () {
        const scrollPos = $(document).scrollTop() + 80; // small offset to trigger earlier
        for (let i = 0; i < sectionIds.length; i++) {
            const id = sectionIds[i];
            if ($(id).length) {
                const top = $(id).offset().top;
                const bottom = top + $(id).outerHeight();
                if (scrollPos >= top && scrollPos < bottom) {
                    $('.nav-link').removeClass('nav-active');
                    $(`.nav-link[href="${id}"]`).addClass('nav-active');
                    break;
                }
            }
        }
    });
});

  const form = document.getElementById("contactForm");
  const result = document.getElementById("formResult");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Show loading message
    result.innerHTML = "⏳ Sending your message...";
    result.style.color = "#0b5ed7";

    const formData = new FormData(form);
    formData.append("access_key", "dcd60d8a-099b-4b76-ab03-0fa2d0988ea9");  

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      result.innerHTML = "✅ Your message has been sent successfully!";
      result.style.color = "green";
      form.reset();
    } else {
      result.innerHTML = "❌ Error sending message. Please try again.";
      result.style.color = "red";
    }
  });


  const chatIcon = document.getElementById("chatIcon");
const chatPopup = document.getElementById("chatPopup");

chatIcon.addEventListener("click", () => {
  chatPopup.style.display =
    chatPopup.style.display === "block" ? "none" : "block";
});
