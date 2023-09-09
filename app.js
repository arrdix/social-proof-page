// local reviews data
const reviewer = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const text = document.getElementById('info');
  const button = document.getElementsByClassName('random-btn');
  const arrow = document.querySelectorAll('.fas');
  let item = 0;

  function getReviewer(item) {
    author.textContent = reviewer[item].name;
    job.textContent = reviewer[item].job;
    text.textContent = reviewer[item].text;
    document.getElementById("person-img").src= reviewer[item].img;
  };

  getReviewer(0);

  arrow.forEach(function(arrows){
    arrows.addEventListener('click', function(arr) {
      newClick = arr.currentTarget.classList;
      if (newClick.contains('fa-chevron-right')) {
        if (item == 3) {
          getReviewer(0);
          item = 0;
        } else if (item < 3) {
          item++;
          getReviewer(item);
        } 
      } else {
        if (item == 0) {
          getReviewer(3);
          item = 3;
        } else if (item <= 3) {
          item--;
          getReviewer(item);
        }
      }
    })
  });

  for (var i = 0; i < button.length; i++) {
    var btn = button[0];
  };

  btn.addEventListener('click', function() {
    function numb() {
      return Math.floor(Math.random() * reviewer.length); 
    }
    item = numb();
    getReviewer(item);
  });