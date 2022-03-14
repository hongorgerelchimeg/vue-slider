
const settings =
{
   el: '#root',
   data: {
      timeCounter: null,
      interval: 3000,
      
      sliderTime: 0,
      activeIndex: 0,

      arrSlides: [
         {
            title: 'Svezia',
            img: '01.jpg',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
         },
         {
            title: 'Svizzera',
            img: '02.jpg',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
         },
         {
            title: 'Gran Bretagna',
            img: '03.jpg',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
         },
         {
            title: 'Germania',
            img: '04.jpg',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
         },
         {
            title: 'Paradise',
            img: '05.jpg',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
         },
      ]
      
   },
   methods: {
      next() {
         if (this.activeIndex == this.arrSlides.length - 1) {
            this.activeIndex = 0;
         }  else {
            this.activeIndex++;
         }
      },
      previus() {
         if (this.activeIndex == 0) {
            this.activeIndex = this.arrSlides.length - 1;
           
            
         }  else {
            this.activeIndex--;
         }
      },startSlider() {
        this.timeCounter = setInterval(this.next, this.interval);
      },stopTimer () {
         clearInterval(this.timeCounter);
      }, startTimer() {
         this.startSlider();
      }, 

   },
   mounted() {
    this.startSlider()
   },
}

const app = new Vue(settings);

