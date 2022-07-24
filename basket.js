//tabs start
let t1 =  document.querySelector("#t1")
t1.addEventListener("click",r1)
function r1(){
  window.location.replace(href="https://www.bigbasket.com/cl/eggs-meat-fish/?nc=b-cp-hp-sec3&b_t=cp_hp_sec3&b_camp=all_hp-emf_hp_topstrip_m_250622_01png&t_from_ban=4856025&t_pos=1&t_ch=desktop")
}
let t2 =  document.querySelector("#t2")
t2.addEventListener("click",r2)
function r2(){
  window.location.replace(href="https://www.tatadigital.com/sso/enter-phone-number")
}
let t3 =  document.querySelector("#t3")
t3.addEventListener("click",r3)
function r3(){
  window.location.replace(href="https://www.bigbasket.com/sp/2207126-the-ayurveda-store/?nc=b-cp-hp-sec3&b_t=cp_hp_sec3&b_camp=t1_hp_cmc_ayurveda_topstrip_m_250622_03png&t_from_ban=4856081&t_pos=3&t_ch=desktop")
}
let t4 =  document.querySelector("#t4")
t4.addEventListener("click",r4)
function r4(){
  window.location.replace(href="https://www.bigbasket.com/sp/2207127-buy-more-save/?nc=b-cp-hp-sec3&b_t=cp_hp_sec3&b_camp=t1_hp_cmc_buy-more-save_topstrip_m_250622_04png&t_from_ban=4856096&t_pos=4&t_ch=desktop")
}
let t5 =  document.querySelector("#t5")
t5.addEventListener("click",r5)
function r5(){
  window.location.replace(href="https://www.bigbasket.com/media/uploads/banner_images/t1_hp_cmc_deal-of-the%20week_topstrip_m_250622_05.png")
}
let t6 =  document.querySelector("#t6")
t6.addEventListener("click",r6)
function r6(){
  window.location.replace(href="https://www.bigbasket.com/sp/2207125-combo-store/?nc=b-cp-hp-sec3&b_t=cp_hp_sec3&b_camp=t1_hp_cmc_combo_topstrip_m_250622_06png&t_from_ban=4856124&t_pos=6&t_ch=desktop")
}
//tabs ends
//banks start
let b1 = document.querySelector("#b1")
b1.addEventListener("click",bone)
function bone(){
  window.location.replace(href="https://www.bigbasket.com/paytm/?nc=Bank%20Offers&t_pg=/july-t1-home-page/&t_p=july-t1-2022&t_s=Bank%20Offers&t_pos_sec=4&t_pos_item=1&t_ch=desktop")
}
let b2 = document.querySelector("#b2")
b2.addEventListener("click",btwo)
function btwo(){
  window.location.replace(href="https://www.bigbasket.com/sbi_mc/?nc=Bank%20Offers&t_pg=/july-t1-home-page/&t_p=july-t1-2022&t_s=Bank%20Offers&t_pos_sec=4&t_pos_item=2&t_ch=deskto")
}
let b3 = document.querySelector("#b3")
b3.addEventListener("click",bthree)
function bthree(){
  window.location.replace(href="https://www.bigbasket.com/rbl/?nc=Bank%20Offers&t_pg=/july-t1-home-page/&t_p=july-t1-2022&t_s=Bank%20Offers&t_pos_sec=4&t_pos_item=3&t_ch=desktop")
}
let b4 = document.querySelector("#b4")
b4.addEventListener("click",bfour)
function bfour(){
  window.location.replace(href="https://www.bigbasket.com/digi-bank-89658/?nc=Bank%20Offers&t_pg=/july-t1-home-page/&t_p=july-t1-2022&t_s=Bank%20Offers&t_pos_sec=4&t_pos_item=4&t_ch=desktop")
}
//banks end
//top offer
let top1 = document.querySelector("#top1")
top1.addEventListener("click",topone)
function topone(){
  window.location.replace(href="https://www.bigbasket.com/sp/2207580-deals-of-the-week/?nc=Top%20Offers&t_pg=%2Fjuly-t1-home-page%2F&t_p=july-t1-2022&t_s=Top%20Offers&t_pos_sec=6&t_pos_item=1&t_ch=desktop")
}
let top2 = document.querySelector("#top2")
top2.addEventListener("click",topTow)
function topTow(){
  window.location.replace(href="https://www.bigbasket.com/sp/2207080-big-packs-biger/?nc=Top%20Offers&t_pg=%2Fjuly-t1-home-page%2F&t_p=july-t1-2022&t_s=Top%20Offers&t_pos_sec=6&t_pos_item=2&t_ch=desktop")
}
let top3 = document.querySelector("#top3")
top3.addEventListener("click",topThree)
function topThree(){
  window.location.replace(href="https://www.bigbasket.com/sp/2207080-big-packs-biger/?nc=Top%20Offers&t_pg=%2Fjuly-t1-home-page%2F&t_p=july-t1-2022&t_s=Top%20Offers&t_pos_sec=6&t_pos_item=3&t_ch=desktop")
}
let top4 = document.querySelector("#top4")
top4.addEventListener("click",topFour)
function topFour(){
  window.location.replace(href="https://www.bigbasket.com/sp/2207082-rs-30-corner/?nc=Top%20Offers&t_pg=%2Fjuly-t1-home-page%2F&t_p=july-t1-2022&t_s=Top%20Offers&t_pos_sec=6&t_pos_item=4&t_ch=desktop")
}
//top offer end
//cart

let  carr =JSON.parse(localStorage.getItem("cartData"))||[]
let cdata = [
  {
     img_url : "https://www.bigbasket.com/media/uploads/p/s/20001214_15-bb-royal-sona-masoori-raw-rice.jpg",
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="    ,
     name:"Sona Masoori Raw Rice/Akki",
     price:500,
  },
  {
     img_url :"https://www.bigbasket.com/media/uploads/p/s/40191534_1-borges-extra-virgin-olive-oil.jpg" ,
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="     ,
     name:"Original Extra Virgin Olive Oil",
     price:300,
  },
  {
     img_url :"https://www.bigbasket.com/media/uploads/p/s/10000909_8-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg",
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="     ,
     name:"CHICKEN-curry cut",
     price:150,
  },
  {
     img_url :"https://www.bigbasket.com/media/uploads/p/s/1212657_3-colgate-strong-teeth-anticavity-toothpaste-with-amino-shakti-saver-pack.jpg",
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="    ,
     name:"COLGATE",
     price:100,
  },
  {
     img_url :"https://www.bigbasket.com/media/uploads/p/s/40103540_5-fresho-watermelon-medium.jpg",
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="    ,
     name:"Water Melon",
     price:50,
  }
] 
let cdata1 = [
  {
     img_url : "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="    ,
     name:"Capsicum",
     price:500,
  },
  {
     img_url :"https://www.bigbasket.com/media/uploads/p/s/10000072_16-fresho-carrot-orange.jpg" ,
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="     ,
     name:"Carrot",
     price:300,
  },
  {
     img_url :"https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="     ,
     name:"Cauliflower",
     price:150,
  },
  {
     img_url :"https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="    ,
     name:"Coriander-leaves",
     price:100,
  },
  {
     img_url :"https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
     type_url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAB8CAMAAAAYagHnAAAAe1BMVEX39/f+/v4AgAEAgAD///8AdwAAcgAAfAD8+vz//P/U5NTJ2cmtyq3e697u9e5LlUsjiSNTnFMAbQD5/Pnm8Oa81rxDkEO20raEtoQAZwC90r2LuIteoF4UhRTN4M3H3sd9rH2TvJMqhip0qXRppGk/kj8yhzI4kDilx6W1MJG6AAADeklEQVR4nO2c25KiMBCGhxx3XQUFPOyIKIKH93/CBayZLSuAJGC3TvWfGy/G+NVfTafTyfDxQSKRSKRG/YLSqNR/oOSPSR1KGP2djOm2ZJw9X5ypcak5nz9fjI9MzXgsnq0oGNtrxmfCe66ET9RETdRETdRETdRETdRETdQ/i9r671GpjZ3VG1AL4U8+t8lOKqUkX2zWadwTHI265NsfAialrtoEnDNdflwd1r24kaiFmGVaaaPJoZU6TB5zo1CXobE9ytpjc8hdHj/ixqAWUaZkR19Jq4P/YAZ4ahEnbT5/+71KO+0Gpxbe1IjnBoVZ1DUJMLUQW9nt821wWXS4DUwtokL1a7lyeWoPblhqIXLJezhdu62D1iABpRZe3tPpm9ut2LDU095O32J78wLUIg3tjhF4eG2ZCY5a+Cdt4XQ95m1TwVHnXQtis1qeSDhqMZO2TpdDLVGphQh6LImmzk1ZG456z2zyx/88MsWk9hZOVjM2b4hsKGoRKwen68jeI1Jv7BPITXqBRi2ilZvT5TjH5nRA1KljVFfliPk8QlFfrSqQuyG3WNRe4ew10xcji8BQi+jyYKfYNbSx0EBRywGXRpQ5Hwy1c7auM7ZRiwBRp8rdaiaNKhuIejnEazOJAFGvB3ltbMTAqId4jUW9HOQ1VoTsB3mN9TTGQ7xGy3y+y57xO19PsNbGo7vVXCKt6HX15Oo1OyJVT3Wl6uq1PKDV12479Gpg7grKHZirzg3TQe12c+se39cIEPfoM4vO9Z2aemZwXZyVWxZhO8Qujic+tYvZDcs5KHV0cvL6aHZDQDvBqUtkq8bTAsiue9HrpPFu6BVy170s/M7WVu+MwgmautwbhJZeqwz9NKn8scyqGuG67VQaljpKbOpsfWk7k4Y+kU76Z+2G/h4Odel20NdtPW/K1CjUt/P/PjEtFx0XROBvtURZ+LgiYWH+SrdaKrfT4IHdXF7Wr3WDqP7NjeqqtrVK2kMajbq6zVfolmTCtU66r2phUVfck0JJM761VIu0K6JRqSvu6Jqftaw85/xGLI9F5ve58ol4u7bEi9NrcZRhJTlPsnTmvfjt2i/w+j9Do+h9bjLfwdt94RWorUXURE3URE3URE3URE3URO1E/Y5vmOE8WDxdu7Hf5sO5fr74yNTv+Zaq6xRIo74R7DeUxoQmkUikn6R/RnaVXEyvAHsAAAAASUVORK5CYII="    ,
     name:"Cucumber",
     price:50,
  }
] 

document.querySelector(".cartimg").addEventListener("click",function(){
    window.location.replace(href="cart.html")
})

display (cdata)
  
function display(data){
data.forEach(function(el,index){
   let sellergs = document.createElement("div")
   sellergs.setAttribute("class","sellergs")
   let offer = document.createElement("p")
   offer.innerText="Get 20% OFF"
   offer.setAttribute("id","offer")
   let productimg = document.createElement("img")
   productimg.setAttribute("src",el.img_url)
   let catimg = document.createElement("img")
   catimg.setAttribute("src",el.type_url)
   catimg.setAttribute("id","veg")
   let p = document.createElement("p")
   p.innerText="Fresho"
   p.setAttribute("id","fresh")
   let name = document.createElement("h4")
   name.innerText = el.name
   let pricemain = document.createElement("h4")
   pricemain.innerText="Price :"
   let price = document.createElement("span")
   price.innerText=el.price
   let cartbutton =document.createElement("button")
   cartbutton.innerText="Add to basket"
   cartbutton.addEventListener("click",function(){
    addCart(el,index)
  })
   let cimg = document.createElement("img")
   cimg.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOltESk2kisSh56FwjCYJz1BAd8MIgxM9Cw&usqp=CAU")
   cartbutton.append(cimg)
   pricemain.append(price)
   sellergs.append(offer,productimg,catimg,p,name,pricemain,cartbutton)
   document.querySelector(".seller").append(sellergs)
})


}

display1(cdata1)

function display1(data){
  data.forEach(function(el,index){
     let sellergs = document.createElement("div")
     sellergs.setAttribute("class","sellergs")
     let offer = document.createElement("p")
     offer.innerText="Get 20% OFF"
     offer.setAttribute("id","offer")
     let productimg = document.createElement("img")
     productimg.setAttribute("src",el.img_url)
     let catimg = document.createElement("img")
     catimg.setAttribute("src",el.type_url)
     catimg.setAttribute("id","veg")
     let p = document.createElement("p")
     p.innerText="Fresho"
     p.setAttribute("id","fresh")
     let name = document.createElement("h4")
     name.innerText = el.name
     let pricemain = document.createElement("h4")
     pricemain.innerText="Price :"
     let price = document.createElement("span")
     price.innerText=el.price
     let cartbutton =document.createElement("button")
     cartbutton.innerText="Add to basket"
     cartbutton.setAttribute("id","Addcart")
     cartbutton.addEventListener("click",function(){
      addCart(el,index)
    })
     let cimg = document.createElement("img")
     cimg.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOltESk2kisSh56FwjCYJz1BAd8MIgxM9Cw&usqp=CAU")
     cartbutton.append(cimg)
     pricemain.append(price)
     sellergs.append(offer,productimg,catimg,p,name,pricemain,cartbutton)
     document.querySelector(".seller1").append(sellergs)
  })
  
  }

  
  let sum = 1
  function addCart(el,index) {
    for(let i = 0; i < carr.length;i++){
      if(carr[i].name==el.name){
        alert ("already in cart")
        return
      }
    }
    carr.push(el)
    localStorage.setItem("cartData",JSON.stringify(carr))
    document.querySelector("#cartitems").innerText=sum++
    alert ("add to cart")
  }

 




//cart end

//footer read more
let ans = false
let more = document.querySelector(".read")
more.addEventListener("click",function(){
  let p= document.createElement("h1")
  p.innerText="India’s biggest Online Supermarket"
  let c = document.createElement("p")
  c.innerText="bigbasket.com believes in providing the highest level of customer service and is continuously innovating to meet customer expectations. Our On-time Guarantee is one such assurance where we refund 10% of the bill value if the delivery is delayed. For all your order values above Rs. 1000, we provide free delivery. A wide range of imported and gourmet products are available through our express delivery and slotted delivery service. If you ever find an item missing on delivery or want to return a product, you can report it to us within 48 hours for a ‘no-questions-asked’ refund."
  let e = document.createElement("p")
  e.innertext="bigbasket.com is synonymous with superior quality and continues to strive for higher levels of customer trust and confidence, by taking feedback and giving our customers what they want. We have added the convenience of pre-cut fruits in our Fresho range. If it’s a product category you’re looking to shop from, we’ve made it convenient for you to access all products in a section easily. For instance, if you’re looking for beverages, you can order from a long list of beverages that include cool drinks, hot teas, fruit juices and more"
  document.querySelector(".info").append(p,c,e)
  document.querySelector(".read").disabled=true
})

//footer readmore end