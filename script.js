let arr = [
    {
      name: "Burger",
      category: "snacks",
      calorie: 400,
      isJunk: true,
      url: "https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg",
    },
    {
      name: "Noodles",
      category: "snacks",
      calorie: 350,
      isJunk: true,
      url: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bm9vZGxlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Maggi",
      category: "snacks",
      calorie: 250,
      isJunk: true,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi4s_UOJ1GMqNcnFcDZ6HwA8j0Mf-RSfrs1AQ01Ox0MAzbxAewekcLTVhrdB8mz-Rl3E&usqp=CAU",
    },
    {
      name: "Avocado Toast",
      category: "Breakfast",
      calorie: 350,
      isJunk: false,
      url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F07%2Fmain%2F1807w-avocado-toast-recipe.jpg%3Fitok%3D_dDi7ZQQ",
    },
    {
      name: "Momos",
      category: "Snacks",
      calorie: 200,
      isJunk: true,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mjDH5t-1QS8fmcbvUj2Qo0jmxs2Drw-PEXVynmA0&s",
    },
    {
      name: "Sandwich",
      category: "breakfast",
      calorie: 450,
      isJunk: true,
      url: "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3DrAOvFAhQ",
    },
    {
      name: "dosa",
      category: "breakfast",
      calorie: 300,
      isJunk: false,
      url: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/q9loqwhnc6kdbj06rnpi",
    },
    {
      name: "idli",
      category: "breakfast",
      calorie: 500,
      isJunk: false,
      url: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2016/08/Idli-5.jpg?resize=683%2C1024&ssl=1",
    },
  ];
  
  console.log(arr);
  
  function filter(category) {
    itemEl = document.querySelector(".container").innerHTML = "";
  
    if (category === "breakfast") {
      arr.filter((item) => {
        if (item.category === "breakfast") {
          document.querySelector(
            ".container"
          ).innerHTML += `<div class="food-item-1 food-item"> <div class="food-img"><img src="${item.url}" alt="" /></div><div class="food-description"><p>Name: ${item.name}</p><p>Category:${item.category}</p><p>Calorie:${item.calorie}</p><p>Junk Food : ${item.isJunk}</p> </div> </div>`;
        }
      });
    } else if (category === "calorie") {
      arr.filter((item) => {
        if (item.calorie < 300) {
          document.querySelector(
            ".container"
          ).innerHTML += `<div class="food-item-1 food-item"> <div class="food-img"><img src="${item.url}" alt="" /></div><div class="food-description"><p>Name: ${item.name}</p><p>Category:${item.category}</p><p>Calorie:${item.calorie}</p><p>Junk Food : ${item.isJunk}</p> </div> </div>`;
        }
      });
    } else if (category === "junk") {
      arr.filter((item) => {
        if (item.isJunk === true) {
          document.querySelector(
            ".container"
          ).innerHTML += `<div class="food-item-1 food-item"> <div class="food-img"><img src="${item.url}" alt="" /></div><div class="food-description"><p>Name: ${item.name}</p><p>Category:${item.category}</p><p>Calorie:${item.calorie}</p><p>Junk Food : ${item.isJunk}</p> </div> </div>`;
        }
      });
    } else if (category === "all") {
      arr.filter((item) => {
        document.querySelector(
          ".container"
        ).innerHTML += `<div class="food-item-1 food-item"> <div class="food-img"><img src="${item.url}" alt="" /></div><div class="food-description"><p>Name: ${item.name}</p><p>Category:${item.category}</p><p>Calorie:${item.calorie}</p><p>Junk Food : ${item.isJunk}</p> </div> </div>`;
      });
    }
  }
  
  function yo() {
    console.log("hi");
  }
  
  document.querySelector(".btn-bf").addEventListener("click", () => {
    filter("breakfast");
  });
  document.querySelector(".btn-all").addEventListener("click", () => {
    filter("all");
  });
  document.querySelector(".btn-cal").addEventListener("click", () => {
    filter("calorie");
  });
  document.querySelector(".btn-junk").addEventListener("click", () => {
    filter("junk");
  });
  