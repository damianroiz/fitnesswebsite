
//  Template main navigation bar

class MyMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<header>     
    <nav>
        <ul>
            <li class="logo">Damian Roiz</li>
            <li class="items"><a href="index.html">Home</a></li>
            <li class="items"><a href="index.html#about">About</a></li>
            <li class="items"><a href="index.html#services">Services</a></li>
            <li class="items"><a href="blog.html">Blog</a></li>
            <li class="items"><a href="#newsletter">Newsletter</a></li>
            <li class="btn"><a href="#"><i class="fas fa-bars"></i></a></li>    
        </ul>
    </nav>

    <script>
        $(document).ready(function(){
            $('.btn').click(function(){
              $('.items').toggleClass('show');
              $('ul li').toggleClass('hide');
            });
        });
    </script>
</header> 
        `
    }
}

customElements.define('my-menu', MyMenu)


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <footer>
    <div class="main-content">
        <div class="left box">
            <h2>About</h2>
            <div class="content">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quam voluptatum quo porro ipsam non, corporis eos itaque praesentium expedita neque odit corrupti voluptatibus alias, provident eligendi ea beatae placeat.</p>

            </div>
        </div>
        <div class="center box">
            <h2>Follow Damian</h2>
            <div class="content">
                <div class="social">
                    <a href="https://twitter.com/damianroiz" target="_blank"><span class="fab fa-twitter"></span></a>
                    <a href="https://www.instagram.com/" target="_blank"><span class="fab fa-instagram"></span></a>
                    <a href="#" target="_blank"><span class="fab fa-youtube"></span></a>
                </div>
            </div>
        </div>
        <div class="right box" id="newsletter">
            <h2>Join the Newsletter</h2>
            <div class="content">
                <form action="#">
                    <div class="field-wrapper">
                       <input id="fullname" type="text" name="fullname" placeholder="Enter your name" data-name="fullname" required=""> 
                    </div>
                    <div class="field-wrapper">
                        <input id="email" type="email" name="email" placeholder="Enter your email" data-name="email" required="">    
                    </div>
                    <div class="btn">
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
      
        </div>
    </div>
    <div class="bottom">
            <p>Created By<a href="https://www.linkedin.com/in/damianroiz/" target="_blank"> OnPoint Media</a> |
                <span class='far fa-copyright'></span> 2020 All rights reserved.</p>  
            <p><a href="damianroiz.com/terms-and-conditions" class='credit' target="_blank">Terms and Conditions</a><a href="damianroiz.com/privacy-policy" target="_blank">Privacy Policy</a></p>                
    </div>
</footer>`

    }
}

customElements.define('my-footer', MyFooter)

// slick carousel 

$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: $('.next'),
  prevArrow: $('.prev')
});




