var container = document.getElementsByTagName("body")[0];

fetch("https://restcountries.com/v2/all")
  .then((a) => a.json())
  .then((x) =>{
      console.log(x);
      //Creating container
      var new_con = document.createElement("div");
      new_con.classList.add("container");
      container.appendChild(new_con);

      

      //Creating row
      var new_row = document.createElement("div");
      new_row.classList.add("row");
      new_row.style.backgroundColor = "rgb(12, 32, 54)";
      new_con.appendChild(new_row);
     
     //Creating H1 Tag
      var new_conH1 = document.createElement("h1");
      new_conH1.setAttribute('id',`title`);
      new_conH1.classList.add('text-center');
      new_conH1.innerText = "Restcountries & Weather using fetch API";
      new_conH1.style = "color:white";
      new_row.appendChild(new_conH1);
  for (i=0;i<x.length;i++)
      {
        //Creating col
          var new_col = document.createElement("div");
          new_col.classList.add("col-sm-6");
          new_col.className = new_col.className + " col-md-4" + " col-lg-4" + " col-xl-4" + " d-flex" + " justify-content-center" + " my-3";
          new_row.appendChild(new_col);

        //Creating card 
          var new_card = document.createElement("div");
          new_card.classList.add("card");
          new_card.className = new_card.className + " h-100";
          new_card.style.width ="18rem";
          new_col.appendChild(new_card);

        //Creating card-header 
          var new_cardHeader = document.createElement("div");
          new_cardHeader.classList.add("card-header");
          new_cardHeader.className = new_cardHeader.className + " bg-dark" + " text-light" + " text-center";
          new_cardHeader.innerText =`${x[i].name}`;
          new_card.appendChild(new_cardHeader);

        //Creating card-body 
          var new_cardBody = document.createElement("div");
          new_cardBody.classList.add("card-body");
          new_cardBody.style.backgroundImage = "linear-gradient(to right, rgb(241, 226, 205) , rgb(79, 92, 100))";
          new_card.appendChild(new_cardBody);

        //Set img in card-body 
          var img = document.createElement('img');
          img.src = x[i].flags.png;
          img.style.width = "254px";
          img.style.height = "170px";
          img.classList.add("card-img-top");
          img.className = img.className + " img-fluid";
          new_cardBody.appendChild(img);

          //Creating card-text 
          var new_cardText = document.createElement("div");
          new_cardText.classList.add("card-text");
          new_cardText.className = new_cardText.className + " m-3";
          new_cardBody.appendChild(new_cardText);

        //Creating P tag in card-body 
          var new_cardpara1 = document.createElement("p");
          new_cardpara1.classList.add("card-text");
          new_cardpara1.className = new_cardpara1.className + " text-center" + " text-light" + " pt-3";
          new_cardpara1.innerText =`Capital : ${x[i].capital}`;
          new_cardText.appendChild(new_cardpara1);

        //Creating P tag in card-body 
          var new_cardpara2 = document.createElement("p");
          new_cardpara2.classList.add("card-text");
          new_cardpara2.className = new_cardpara2.className + " text-center" + " text-light";
          new_cardpara2.innerText = `Region : ${x[i].region}`;
          new_cardText.appendChild(new_cardpara2);

        //Creating P tag in card-body 
          var new_cardpara3 = document.createElement("p");
          new_cardpara3.classList.add("card-text");
          new_cardpara3.className = new_cardpara3.className + " text-center" + " text-light";
          new_cardpara3.innerText = `Country Code : ${x[i].alpha3Code}`;
          new_cardText.appendChild(new_cardpara3);

          //Creating P tag in card-body 
          var new_cardpara4 = document.createElement("p");
          new_cardpara4.classList.add("card-text");
          new_cardpara4.className = new_cardpara4.className + " text-center" + " text-light";
          new_cardpara4.innerText = `Latlng : ${x[i].latlng}`;
          new_cardText.appendChild(new_cardpara4);
          
        //Creating button in Card-body
          var new_cardButton = document.createElement("div");
          new_cardButton.setAttribute('id',`div${i}`);
          new_cardButton.classList.add("d-flex");
          new_cardButton.className = new_cardButton.className + " justify-content-center";
          new_cardBody.appendChild(new_cardButton);
          var new_Button = document.createElement("button");
          new_Button.setAttribute('id',`button${i}`);
          new_Button.classList.add("btn");
          new_Button.className = new_Button.className + " btn-primary";
          new_Button.setAttribute("href", "#");
          new_Button.innerText = "Click for Weather";
          new_Button.style.backgroundColor = "transparent";
          new_Button.style.border = "1px solid rgb(241, 240, 240)";
          new_cardButton.appendChild(new_Button);
          new_Button.setAttribute("onclick", `getWeather("${x[i].name}","${i}")`);
          } 
          
  })
  .catch((err) => {
      console.log(err);
  })


//function for getting Weather API 
  function getWeather(a,i){
         var new_Button=document.getElementById(`button${i}`);
         new_Button.classList.add("py-0");
         var new_cardButton=document.getElementById(`div${i}`);
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${a}&appid=d746835531bef6dacba70a1a8e6edd11`)
            .then((b) => b.json())
            .then((s) =>{
              let temp=s.main.temp-273.15;
              let cel = temp.toFixed(2);
              let description=s.weather[0].description;
              let icon=s.weather[0].icon;
              
              new_Button.innerHTML =`<img src="https://openweathermap.org/img/wn/${icon}@2x.png" style="width:38px; height:auto" class="card-img-top" alt="..."> ${cel} °C  ${description}`;
              new_cardButton.appendChild(new_Button);   
            })
            .catch((err) => {
              console.log(err);
            })
           }

 
   
  
    















