function memberThumbnail(member) {
  const thumbnail = `
  <div class="col-12 col-xs-6 col-md-4 col-lg-3 thumbnail" id="${member.eid}">
   
      <header class="thumbnail-header">
        <h4 class="thumbnail-name">${member.first_name} ${member.last_name}</h4>
        <p class="thumbnail-email">
          <a href="mailto:${member.mail}@du.se" title="Mail ${member.first_name} ${member.last_name}">
            ${member.mail}@du.se
          </a>
        </p>
      </header>           
      <div class="thumbnail-body">
       <a class="profile-link" href="./account.html" title="Link to ${member.first_name} ${member.last_name} profile">
        <picture class="thumbnail-picture"> 
          <source
            type="image/webp"
            srcset="./img/informative/member/${member.id}/webp/${member.id}_256.webp 256w,
                    ./img/informative/member/${member.id}/webp/${member.id}_384.webp 384w,
                    ./img/informative/member/${member.id}/webp/${member.id}_512.webp 512w"
            sizes="(min-width: 996px) 512px,
                   (min-width: 768px) 384px,
                   (min-width: 480px) 256px,
                   100vw">
          <source
            type="image/jpeg"
            srcset="./img/informative/member/${member.id}/jpg/${member.id}_256.jpg 256w,
                    ./img/informative/member/${member.id}/jpg/${member.id}_384.jpg 384w,
                    ./img/informative/member/${member.id}/jpg/${member.id}_512.jpg 512w"
            sizes="(min-width: 996px) 512px,
                   (min-width: 768px) 384px,
                   (min-width: 480px) 256px,
                   100vw">

        
          <img 
            class="thumbnail-image"
            src="./img/informative/member/${member.id}/jpg/${member.id}_512.jpg" 
            width="512"
            height="512"
            alt="${member.alt}"
            itemprop="image">
        </picture>
         </a>
      </div>
   
  </div>
  `;
  return thumbnail;
}

function toggleHeaderVisibility() {
  const headerElements = document.querySelectorAll('.thumbnail-header');

  if (window.innerWidth >= 768) { 
    headerElements.forEach(header => {
      header.style.display = 'none';
    });
  } else {
    headerElements.forEach(header => {
      header.style.display = '';
    });
  }
}

toggleHeaderVisibility();

window.addEventListener('resize', toggleHeaderVisibility);


function addMemberThumbnails(members) {
  let output = "";
  members.forEach(function (member) {
    output += memberThumbnail(member);
  });
  return output;
}


function enableHoverEffect() {
  const thumbnails = document.querySelectorAll('.thumbnail');

  if (window.innerWidth >= 768) {
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('mouseenter', addHoverEffect);
      thumbnail.addEventListener('mouseleave', removeHoverEffect);
    });
  } else {
    thumbnails.forEach(thumbnail => {
      thumbnail.removeEventListener('mouseenter', addHoverEffect);
      thumbnail.removeEventListener('mouseleave', removeHoverEffect);
      thumbnail.style.transform = ''; 
      thumbnail.style.boxShadow = '';
    });
  }
}

function addHoverEffect(event) {
  event.currentTarget.style.transform = 'scale(1.07)';
  event.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
}

function removeHoverEffect(event) {
  event.currentTarget.style.transform = '';
  event.currentTarget.style.boxShadow = '';
}


enableHoverEffect();
window.addEventListener('resize', enableHoverEffect);



const gallery = document.querySelector(".gallery");

const members = [
  {
    id: "000000",
    eid: "zero",
    first_name: "Alexander",
    last_name: "Karlsson",
    gender: "Male",
    mail: "alk",
    alt: "Portrait of a thoughtful bald-shaven man looking upwards, with trees and umbrellas softly blurred in the background, in a monochromatic tone.",
  },
  {
    id: "000001",
    eid: "one",
    first_name: "Robin",
    last_name: "Vredeskog",
    gender: "Male",
    mail: "rov",
    alt: "Close-up portrait of a young man with short hair and a light stubble, dressed in a dark textured sweater, against a dark background.",
  },
  {
    id: "000002",
    eid: "two",
    first_name: "Jane",
    last_name: "Sarani",
    gender: "Other",
    mail: "jas",
    alt: "Close-up of a young woman with blue eyes, light brown hair, and a serene expression, with a blurred natural background.",
  },
  {
    id: "000003",
    eid: "three",
    first_name: "Nynaeve",
    last_name: "Al'Meara",
    gender: "Female",
    mail: "nya",
    alt: "Profile view of a woman with a long, sleek ponytail, posed against a warm-toned background, looking upward.",
  },
  {
    id: "000004",
    eid: "four",
    first_name: "Ida",
    last_name: "Olsen",
    gender: "Female",
    mail: "ido",
    alt: "A cheerful young woman holding a large slice of watermelon covering her mouth, with greenary in the blurred background.",
  },
  {
    id: "000005",
    eid: "five",
    first_name: "Jonathan",
    last_name: "Eriksson",
    gender: "Male",
    mail: "joe",
    alt: "Black and white portrait of a bespectacled man with shoulder-length hair, smiling slightly towards the camera.",
  },
  {
    id: "000006",
    eid: "six",
    first_name: "Isak",
    last_name: "Rapp",
    gender: "Other",
    mail: "isr",
    alt: "Monochromatic portrait of a young man with contemplative eyes and short hair, wearing a black t-shirt with an urban landscape in the background.",
  },
  {
    id: "000007",
    eid: "seven",
    first_name: "Min",
    last_name: "Farshaw",
    gender: "Female",
    mail: "mif",
    alt: "Portrait of a young woman with voluminous curly hair looking up, with a soft pink backdrop creating an ethereal glow around her.",
  },
  {
    id: "000008",
    eid: "eight",
    first_name: "Filippa",
    last_name: "Masonei",
    gender: "Female",
    mail: "fim",
    alt: "Close-up portrait of a woman with short hair, confidently posing in a patterned blouse against a red wall, with striking eye makeup.",
  },
  {
    id: "000009",
    eid: "nine",
    first_name: "Elayne",
    last_name: "Trakand",
    gender: "Female",
    mail: "elt",
    alt: "Side profile of a young woman with auburn hair, gazing into the distance, set against a blue sky and architectural backdrop.",
  },
  {
    id: "000010",
    eid: "ten",
    first_name: "Perrin",
    last_name: "Aybara",
    gender: "Male",
    mail: "pea",
    alt: "Portrait of a smiling man with short dark hair and stubble, wearing a white t-shirt, against a textured grey background.",
  },
  {
    id: "000011",
    eid: "eleven",
    first_name: "Tuon",
    last_name: "Athaem",
    gender: "Other",
    mail: "tua",
    alt: "Portrait of a young woman with short hair and a white hoodie, looking over her shoulder by a soccer goal on a field.",
  },
  {
    id: "000012",
    eid: "twelve",
    first_name: "Kamarile",
    last_name: "Maradim",
    gender: "Female",
    mail: "kam",
    alt: "Elegant woman in a grey top and black hat, with a thoughtful expression, standing in front of lush green foliage.",
  },
  {
    id: "000013",
    eid: "thirteen",
    first_name: "Fail",
    last_name: "Bashere",
    gender: "Female",
    mail: "fab",
    alt: "Portrait of a girl with long dark hair and a red checkered shirt, partially obscured by green leaves, with a soft focus background.",
  },
  {
    id: "000014",
    eid: "fourteen",
    first_name: "Tom",
    last_name: "Bombadill",
    gender: "Other",
    mail: "tob",
    alt: "Monochromatic portrait of a smiling man with glasses, a beard, and a checkered shirt, with a blurred natural background.",
  },
  {
    id: "000015",
    eid: "fifteen",
    first_name: "Elan",
    last_name: "Morin Tedronai",
    gender: "Other",
    mail: "elm",
    alt: "Black and white close-up portrait of a man with tousled hair and glasses, gazing intensely at the camera with a neutral background.",
  },
  {
    id: "000016",
    eid: "sixteen",
    first_name: "Mierin",
    last_name: "Eronaile",
    gender: "Female",
    mail: "mie",
    alt: "Portrait of a young woman with clear skin and long hair, wearing a striped shirt, with the soft glow of dusk lighting her features.",
  },
  {
    id: "000017",
    eid: "seventeen",
    first_name: "Barid Bel",
    last_name: "Medar",
    gender: "Male",
    mail: "bam",
    alt: "Portrait of a young man in a grey hoodie, standing in a contemplative pose with his head tilted back and eyes closed, against a misty backdrop.",
  },
];


gallery.insertAdjacentHTML("beforeend", addMemberThumbnails(members));
