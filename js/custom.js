document.addEventListener("DOMContentLoaded", function() {
  const bodyId = document.body.id;

  const headerHTML = `
    <header class="header">
      <h1 class="heading mt-35" alt="VAST logo"><span class="c1-80-90">VA</span><span class="c3-100-60">S</span><span class="c1-80-90">T</span></h1>
      <p class="lead c1-80-90 mb-35">Data Storage & Analysis</p>
      <nav class="container nav pb-2" aria-label="Main Navigation">
        <ul class="head">
          <li class="item">
            <a class="link px-4 py-2${bodyId === 'home' ? ' current' : ''}" href="./home.html"><span class="c1-80-90">VA</span><span class="c3-100-60">S</span><span class="c1-80-90">T</span></a>
          </li>
          <li class="item menu"><a class="link px-4 py-2" href="#" aria-label="Navigation Menu">&#9776;</a></li>
        </ul>
        <ul class="list">
          <li class="item"><a class="link px-4 py-2${bodyId === 'services' ? ' current' : ''}" href="./services.html">Services</a></li>
          <li class="item"><a class="link px-4 py-2${bodyId === 'members' ? ' current' : ''}" href="./members.html">Members</a></li>
          <li class="item split"><a class="link px-4 py-2${bodyId === 'account' ? ' current' : ''}" href="./account.html">Account</a></li>
          <li class="item"><a class="link px-4 py-2${bodyId === 'sign_up' ? ' current' : ''}" href="./sign_up.html">Sign Up</a></li>
          <li class="item"><a class="link px-4 py-2" href="#" onclick="document.getElementById('loginDialog').showModal()">Log In</a></li>
        </ul>
      </nav>
    </header>`;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);


  if (bodyId == "account") {
    let pageMain = document.querySelector("main");
    const accStartHTML = `
      <section class="account-bg segment" aria-labelledby="accountName">
        <header class="container grid mb-50">
          <div class="col-12 col-xs-11 offset-xs-1 col-sm-10 offset-sm-1 col-md-7 offset-md-0">
            <h2 id="accountName" class="fs-3 c3-100-80" itemprop="name">Alexander Karlsson</h2>
            <p class="fs-1 c1-70-90" itemprop="jobTitle">Lecturer in Informatics</p>
          </div>
          <div class="col-12 col-xs-10 offset-xs-1 col-sm-8 offset-sm-2 col-md-7 offset-md-5 col-lg-6 offset-lg-6 col-xl-5 offset-xl-7 col-xxl-4 offset-xxl-8 p-5 circle glass box-shadow-3 ps-rel">
            <div class="circle">
              <picture>
                <source type="image/webp" srcset="
                    ./img/informative/member/000000/webp/000000_256.webp 256w,
                    ./img/informative/member/000000/webp/000000_512.webp 512w,
                    ./img/informative/member/000000/webp/000000_860.webp 860w,
                    ./img/informative/member/000000/webp/000000_1024.webp 1024w,
                    ./img/informative/member/000000/webp/000000_2048.webp 2048w" sizes="
                    (min-width: 2000px) calc(24.5vw - 36px),  
                    (min-width: 1600px) calc(30.79vw - 39px),
                    (min-width: 1200px) calc(40vw - 35px),
                    (min-width: 1000px) calc(50vw - 31px),
                    (min-width: 780px) calc(60vw - 30px),
                    (min-width: 480px) calc(83.21vw - 51px),
                    calc(100vw - 55px)" />
                <source type="image/jpg" srcset="
                    ./img/informative/member/000000/jpg/000000_256.jpg 256w,
                    ./img/informative/member/000000/jpg/000000_512.jpg 512w,
                    ./img/informative/member/000000/jpg/000000_860.jpg 860w,
                    ./img/informative/member/000000/jpg/000000_1024.jpg 1024w,
                    ./img/informative/member/000000/jpg/000000_2048.jpg 2048w" sizes="
                    (min-width: 2000px) calc(24.5vw - 36px),
                    (min-width: 1600px) calc(30.79vw - 39px),
                    (min-width: 1200px) calc(40vw - 35px),
                    (min-width: 1000px) calc(50vw - 31px),
                    (min-width: 780px) calc(60vw - 30px),
                    (min-width: 480px) calc(83.21vw - 51px),
                    calc(100vw - 55px)" />
                <img class="circle" src="./img/informative/member/000000/jpg/000000_1024.jpg" width="1024" height="1024"
                  itemprop="image"
                  alt="Portrait of a thoughtful bald-shaven man looking upwards, with trees and umbrellas softly blurred in the background, in a monochromatic tone.">
              </picture>
            </div>
            <a class="ps-abs right-15 bottom-15 origo circle bgc-1-50-50 bs-solid bc-3-light bw-1 c-white fs-6 fs-xs-5 fs-md-3 fs-lg-2 c3-50-50 p-4 trst-short glass box-shadow-3"
              href="mailto:alk@du.se" title="Email Alexander Karlsson" aria-label="Email Alexander Karlsson"
              itemprop="email">&#x2709;</a>
          </div>
        </header>
        <div class="container grid jc-center mt-10 mb-20">
          <section class="info col-12 col-xs-10 offset-xs-1 col-md-8 offset-md-2 col-xl-6 offset-xl-0" aria-labelledby="presentation">
            <h3 class="heading heading--first-letter" id="presentation">Presentation</h3>
            <div class="main">
              <p class="paragraph" itemprop="description">
                My nickname is Alle. I have two children. My five and a half years old son Elis and my three year old
                daughter Ida.
                My parter is a skilled mother, graphic designer, painter, illustrator and a wonderful person.
              </p>
              <p class="paragraph">
                I have three sisters. A physician, a psychologist and a criminologist. It's easy to see that
                the my siblings have found different areas of interests in life. I believe I add to that diversity by
                being in love with subjects such as quantum mechanics, astronomy, geology, anthropology, DNA and
                ancient-history.
              </p>
              <p class="paragraph">
                If I ever find room for it, I've been known to read "The Wheel of Time".
              </p>
            </div>
            <p class="meta text-right ff-script fs-4 fs-xs-3 fs-sm-2 fs-xl-1">Alexander Karlsson</p>
          </section>
        </div>
      </section>`;
    
    const accEndHTML = `
      <section
        class="ai-end segment segment--bg-sea-spray segment--bg-blur-4 segment--bg-danger-gradient segment--bg-blend-color segment--skew-right"
        aria-labelledby="courseActivity">
        <div class="container grid">
          <h2 class="col-12 mb-5 fs-6 c-white text-trns-upper text-right ws-nowrap" id="courseActivity">
            <span class="d-inline-block pl-10 b-width-b-2 b-style-b-solid">Course Activity</span>
          </h2>
          <table class="col-12 table table--radius table--hover p-6 b-radius-3 glass">
            <thead>
              <tr>
                <th>Code</th>
                <th>Course</th>
                <th>Year</th>
                <th>Period</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GIK298</td>
                <td>Data- and Information Management</td>
                <td>1</td>
                <td>1</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>GIK297</td>
                <td>Responsive Web Design</td>
                <td>1</td>
                <td>2</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>GIK2AM</td>
                <td>Visual Identity</td>
                <td>1</td>
                <td>3</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>GIK299</td>
                <td>Object Oriented Programming</td>
                <td>1</td>
                <td>3</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>GIK2LF</td>
                <td>Digital Imaging</td>
                <td>2</td>
                <td>2</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>GIK2F8</td>
                <td>Dynamic Web Applications</td>
                <td>2</td>
                <td>2</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>GIK2H8</td>
                <td>User Centered Design</td>
                <td>2</td>
                <td>3</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>GIK2H9</td>
                <td>Design of Web Applications</td>
                <td>2</td>
                <td>3</td>
                <td>Lecturer</td>
              </tr>
              <tr>
                <td>GIK2JL</td>
                <td>Information Design</td>
                <td>2</td>
                <td>4</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>GIK2LG</td>
                <td>Collaborative Project</td>
                <td>3</td>
                <td>1</td>
                <td>Admin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>`;

    function addSkill(skill) {
      const progressbar = `
      <div class="progress__item">
        <p class="progress__text" style="width:${skill.lvl}%" data-value="${skill.lvl}">${skill.skill}</p>
        <div class="progress__wrapper">
          <div class="progress__bar" style="width: ${skill.lvl}%" title="${skill.skill}" role="progressbar"
            aria-valuetext="${skill.skill} skill level ${skill.lvl}%" aria-valuenow="${skill.lvl}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
        `;
      return progressbar;
    }
    
    function addSkills(skills) {
      let output = "";
      skills.forEach(function (skill) {
        output += addSkill(skill);
      });
      return output;
    }
    
    const progressbarArea = document.querySelector(".progress");
    
    skills = [
      {
        skill: "CSS",
        lvl: "96",
      },
      {
        skill: "HTML",
        lvl: "92",
      },
      {
        skill: "SVG",
        lvl: "72",
      },
      {
        skill: "Python",
        lvl: "63",
      },
      {
        skill: "JavaScript",
        lvl: "56",
      },
    ];
    
    pageMain.insertAdjacentHTML('afterbegin', accStartHTML);
    progressbarArea.insertAdjacentHTML("beforeend", addSkills(skills));
    pageMain.insertAdjacentHTML('beforeend', accEndHTML);
    
  }

  if (bodyId == "services") {
    document.querySelectorAll(".accordion .block").forEach(block => {
      block.addEventListener("toggle", event => {
          if (block.open) {
              document.querySelectorAll(".accordion .block").forEach(otherBlock => {
                  if (otherBlock !== block) {
                    otherBlock.removeAttribute("open");
                  }
              });
          }
      });
    });
  }

  if (bodyId == "sign_up") {
    document.addEventListener('DOMContentLoaded', function () {

      const form = document.querySelector('form');
      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const namePattern = /^[a-zA-Z\s\-,.']+$/;
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
      const dob = document.getElementById('dob');
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,24}$/;
    
      function createTooltip(element, message) {
        let tooltip = element.parentNode.querySelector('.tooltip');
        if (!tooltip) {
          tooltip = document.createElement('div');
          tooltip.className = 'tooltip';
          element.parentNode.appendChild(tooltip);
        }
        tooltip.textContent = message;
        positionTooltip(element, tooltip);
        tooltip.style.display = 'block'; // Show the tooltip
      }
      
      function hideTooltip(element) {
        const tooltip = element.parentNode.querySelector('.tooltip');
        if (tooltip) {
          tooltip.style.display = 'none'; // Hide the tooltip
        }
      }
      
      function positionTooltip(element, tooltip) {
        const elementRect = element.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        tooltip.style.top = elementRect.bottom + 'px';
        tooltip.style.left = (elementRect.left + (elementRect.width - tooltipRect.width) / 2) + 'px';
      }
    
    
    
      form.addEventListener('blur', function (event) {
        let element = event.target;
        validateField(element);
      }, true);
    
      function validateField(element) {
        let errorSpan = element.nextElementSibling;
        let valid = true;
    
        if (element === firstName) {
          if (element.value.trim().length === 0) {
            errorSpan.textContent = 'First Name is required';
            valid = false;
          } else if (!namePattern.test(firstName.value)) {
            errorSpan.textContent = 'First Name must not contain numbers';
            valid = false;
          }
        }
    
        if (element === lastName) {
          if (element.value.trim().length === 0) {
            errorSpan.textContent = 'Last Name is required';
            valid = false;
          } else if (!namePattern.test(lastName.value)) {
            errorSpan.textContent = 'Last must not contain numbers';
            valid = false;
          }
        }
    
        if (element === email && !emailPattern.test(email.value)) {
          errorSpan.textContent = 'Invalid email format';
          valid = false;
        }
    
        if (element === password && !passwordPattern.test(password.value)) {
          errorSpan.textContent = 'Invalid password format';
          valid = false;
        }
    
        if (element === password || element === confirmPassword) {
          if (password.value !== confirmPassword.value) {
            errorSpan.textContent = 'Passwords do not match';
            valid = false;
          } else {
            errorSpan.textContent = '';
          }
        }
    
        if (element === dob && !element.value) {
          errorSpan.textContent = 'Date of Birth is required';
          valid = false;
        }
    
        if (element.required && element.value.trim() === '') {
          errorSpan.textContent = 'This field is required';
          valid = false;
        }
    
        if (valid) {
          errorSpan.textContent = '';
        }
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const menuButton = document.querySelector(".head .menu .link");
  const navList = document.querySelector(".nav .list");

  if (!menuButton) {
    console.error("menuButton element not found");
    return;
  }

  const toggleNavList = () => {
    console.log("Toggling Nav List");
    const currentDisplay = navList.style.display;
    navList.style.display = currentDisplay === "flex" ? "none" : "flex";
  };
  
  const updateNavList = () => {
    if (window.innerWidth < 992) {
      navList.style.display = "none";
    } else {
      navList.style.display = "flex";
    }
  };
  
  updateNavList();

  menuButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button clicked", menuButton, navList);
    toggleNavList();
  });

  window.addEventListener("resize", updateNavList);
});

const aftermain = `
<footer class="footer segment">
  <div class="container grid">
    <div class="col-12 grid">
      <div class="col-12">
        <h3 class="f-size-smallest mb-2">Contact</h3>
        <ul>
          <li><a href="#">Help</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Report Error</a></li>
        </ul>
      </div>
      <div class="col-12">
        <h3 class="f-size-smallest mt-5 mb-2">About</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Corporate Responsibility</a></li>
        </ul>
      </div>
    </div>
    <div class="mt-20 grid-flow-column">
      <a href="https://www.facebook.com/" class="social-media d-inline-block oflow-hidden br-03 trst-short" rel="noopener" target="_blank" title="Facebook">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path d="M0,0v128h69l-0.1-49.9l-16.7,0.1l-0.1-19L69,59V42.5c0-10.4,7.3-23.2,23.2-23.2c4.2,0,11.2-0.3,16.7,0.4v17.4H97.5
            c-3.1,0-8.5,0.6-8.5,9.5c0,7.3,0.1,12.4,0.1,12.4h18.8l-2.3,19.2H89V128h39V0H0z" />
        </svg>
        <span class="sr-only">Follow us on Facebook</span>
      </a>
      <a href="https://www.instagram.com/" class="social-media d-inline-block oflow-hidden br-03 trst-short" rel="noopener" target="_blank" title="Instagram">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path d="M79.8,64c0,8.7-7.1,15.8-15.8,15.8S48.3,72.7,48.3,64s7.1-15.8,15.8-15.8C72.8,48.2,79.8,55.3,79.8,64z M102.3,43.6v40.8
            c-0.1,9.9-8,17.8-17.9,17.9H43.6c-9.9-0.1-17.8-8-17.9-17.9V43.6c0.1-9.9,8-17.8,17.9-17.9h40.8C94.2,25.8,102.2,33.8,102.3,43.6z
            M88,64c0-13.3-10.7-24-24-24S40,50.7,40,64s10.7,24,24,24C77.2,88,88,77.3,88,64L88,64z M94.5,39.7c0-3-2.5-5.5-5.5-5.5
            s-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5S94.5,42.7,94.5,39.7z M128,0v128H0V0H128z M110.6,43.3h-0.1c0-14.2-11.6-25.8-25.8-25.8H43.3
            c-14.2,0-25.8,11.6-25.8,25.8v41.5c0,14.2,11.6,25.8,25.8,25.8h41.5c14.2,0,25.8-11.6,25.8-25.8V43.3z" />
        </svg>
        <span class="sr-only">Follow us on Instagram</span>
      </a>
      <a href="https://www.linkedin.com/" class="social-media d-inline-block oflow-hidden br-03 trst-short" rel="noopener" target="_blank" title="LinkedIn">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path d="M0,0v128h128V0H0z M35.8,91.9V54.2h12.7l0.1,37.7H35.8z M42.2,49.2c-4,0-7.2-3-7.2-6.6c0-3.6,3.2-6.6,7.2-6.6s7.2,3,7.2,6.6
            C49.4,46.2,46.2,49.2,42.2,49.2z M81.6,92V70.5c0-10.2-13.9-8.9-13.9-0.4v21.8H55V54.2h12.7v5.2c5.5-9.2,26.7-8.8,26.7,9.7
            c0,7.5,0.1,22.8,0.1,22.8L81.6,92z" />
        </svg>
        <span class="sr-only">Connect with us on LinkedIn</span>
      </a>
      <a href="https://twitter.com/" class="social-media d-inline-block oflow-hidden br-03 trst-short" rel="noopener" target="_blank" title="Twitter">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path d="M0,0v128h128V0H0z M99.6,45.6c2.2,38.3-39.1,70.6-80.5,46.8c9.6,1,19.3-1.8,26.9-7.8c-7.6,0.1-14.9-5.8-17.1-13
            c2.2,0.3,3.5,0.9,7.8-0.2c-12-3.1-14.2-13.5-14.2-18.3c1.6,0.8,4.9,2.3,8,2.2c-3-1.4-12.6-10.9-5.4-24.5c12.7,14.7,26,18.1,38,19.2
            c-3.4-21.4,20.7-28.8,31.5-16.8c4.2-0.8,8.2-2.4,11.8-4.8c-0.4,3.3-4.7,8.8-8,10.3c3.6-0.4,7.2-1.3,10.5-2.8
            C106.9,38.9,103.6,43.4,99.6,45.6z" />
        </svg>
        <span class="sr-only">Follow us on Twitter</span>
      </a>
    </div>
  </div>
</footer>
<dialog class="container b-radius-5 bw-0 box-shadow" id="loginDialog" aria-labelledby="loginDialogTitle" aria-describedby="loginDialogDesc">
<form class="form" novalidate>
<br>
<br>
  <h2 id="loginDialogTitle" class="heading c1-70-30 text-trns-upper mb-3">Log <span class="c3-70-50">In</span></h2>
  
  <fieldset class="fieldset">
    <div class="group" role="group">
      <label class="label" for="username">Username: *</label>
      <input class="input" type="text" id="username" name="username" aria-describedby="usernameHelp" required>
      <span class="error" aria-live="polite"></span>
    </div>
    <div class="group" role="group">
      <label class="label" for="passwordLogin">Password: *</label>
      <input class="input" type="password" id="passwordLogin" name="password" aria-describedby="passwordHelp" required>
      <span class="error" aria-live="polite"></span>
    </div>
  </fieldset>
  <div class="buttons">
    <button class="button" type="reset" onclick="document.getElementById('loginDialog').close()">Cancel</button>
    <button class="button" type="submit">Login</button>
  </div>
</form>
</dialog>
`;

const pageMain = document.querySelector("main");
pageMain.insertAdjacentHTML("afterend", aftermain);