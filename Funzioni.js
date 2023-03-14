function AggiungiOra()
{
  var oraCorrente = document.getElementById("orario").value;
  var ore1 = parseInt(oraCorrente.substring(1,2));
  var ore2 = parseInt(oraCorrente.substring(0,2));
  var minuti = parseInt(oraCorrente.substring(3,5));
  var add_Ora1 = ore1 + 1;
  var add_Ora2 = ore2 + 1;
  if (ore2 >= 9 && minuti >= 9)
  {
      oraCorrente = document.getElementById("orario").value = add_Ora2 + ":" + minuti;
  }
  if (ore2 < 9 && minuti >= 9)
  {
      oraCorrente = document.getElementById("orario").value = "0" + add_Ora1 + ":" + minuti;
  }
  if (ore2 >= 9 && minuti < 10)
  {
      oraCorrente = document.getElementById("orario").value = add_Ora2 + ":" + "0" + minuti;
  }
  if (ore2 < 9 && minuti < 10)
  {
      oraCorrente = document.getElementById("orario").value = "0" + add_Ora1 + ":" + "0" + minuti;
  }
  if (ore2 == 23 && minuti < 10)
  {
    oraCorrente = document.getElementById("orario").value = "0" + "0" + ":" + "0" + minuti;
  }
  if (ore2 == 23 && minuti >= 9)
  {
    oraCorrente = document.getElementById("orario").value = "0" + "0" + ":" + minuti;
  }
  console.log("oraCorrente",oraCorrente);
}

function AggiungiMinuto()
{
  var oraCorrente = document.getElementById("orario").value;
  var ore = parseInt(oraCorrente.substring(0,2));
  var minuti1 = parseInt(oraCorrente.substring(4,5));
  var minuti2 = parseInt(oraCorrente.substring(3,5));
  var add_Minuto1 = minuti1 + 1;
  var add_Minuto2 = minuti2 + 1;

  if (minuti2 >= 9 && ore >= 9)
  {
      oraCorrente = document.getElementById("orario").value = ore + ":" + add_Minuto2;
  }
  if (minuti2 < 9 && ore >= 9)
  {
      oraCorrente = document.getElementById("orario").value = ore + ":" + "0" + add_Minuto1;
  }
  if (minuti2 >= 9 && ore < 10)
  {
      oraCorrente = document.getElementById("orario").value = "0" + ore + ":" + add_Minuto2;
  }
  if (minuti2 < 9 && ore < 10)
  {
      oraCorrente = document.getElementById("orario").value = "0" + ore + ":" + "0" + add_Minuto1;
  }
  if (minuti2 == 59 && ore >= 9)
  {
    oraCorrente = document.getElementById("orario").value = ore + ":" + "0" + "0";
  }
  if (minuti2 == 59 && ore < 10)
  {
    oraCorrente = document.getElementById("orario").value = "0" + ore + ":" + "0" + "0";
  }
  console.log("oraCorrente",oraCorrente);
}

function Azzera_orario()
{
  var oraCorrente = document.getElementById("orario").value;
  oraCorrente = document.getElementById("orario").value = "00:00";
}
function vedi_Ora()
{
  var oraCorrente = document.getElementById("orario").value;
  var ore = parseInt(oraCorrente.substring(0,2));
  var minuti = parseInt(oraCorrente.substring(3,5));
  console.log("Ora",ore);
  console.log("Minuti",minuti);

  var nero1 = [document.getElementById("nero1"), document.getElementById("nero2"), document.getElementById("nero3"), document.getElementById("nero4")];

  if(ore<5 || ore>23) {for(var i=0;i<nero1.length;i++) {nero1[i].style.backgroundColor = "black";}}
  if (ore>=5 && ore <10) {for(var i=1;i<nero1.length;i++) {nero1[0].style.backgroundColor = "red";nero1[i].style.backgroundColor = "black";}}
  if (ore>=10 && ore <15) {for(var i=2;i<nero1.length;i++) {nero1[i-2].style.backgroundColor = "red";nero1[i].style.backgroundColor = "black";}}
  if (ore>=15 && ore <20) {for(var i=0;i<nero1.length-1;i++) {nero1[i].style.backgroundColor = "red";nero1[nero1.length-1].style.backgroundColor = "black";}}
  if (ore>=20 && ore <24) {for(var i=0;i<nero1.length;i++) {nero1[i].style.backgroundColor = "red";}}

  var nero2 = [document.getElementById("nero5"), document.getElementById("nero6"), document.getElementById("nero7"), document.getElementById("nero8")];
  var ore_1 = (ore-1)%5, ore_2 = (ore-2)%5, ore_3 = (ore-3)%5, ore_4 = (ore-4)%5, ore_5 = ore%5;

  if (ore_1 == 0 || ore == 1) {for(var i=1;i<nero2.length;i++) {nero2[0].style.backgroundColor = "red";nero2[i].style.backgroundColor = "black";}}
  if (ore_2 == 0 || ore == 2)  {for(var i=2;i<nero2.length;i++) {nero2[i-2].style.backgroundColor = "red";nero2[i].style.backgroundColor = "black";}}
  if (ore_3 == 0 || ore == 3)  {for(var i=0;i<nero2.length-1;i++) {nero2[i].style.backgroundColor = "red";nero2[nero2.length-1].style.backgroundColor = "black";}}
  if (ore_4 == 0 || ore == 4) {for(var i=0;i<nero2.length;i++) {nero2[i].style.backgroundColor = "red";}}
  if (ore_5 == 0 || ore>23) {for(var i=0;i<nero2.length;i++) {nero2[i].style.backgroundColor = "black";}}

  var nero3 = [document.getElementById("nero_piccolo1"), document.getElementById("nero_piccolo2"), document.getElementById("nero_piccolo3"), document.getElementById("nero_piccolo4"), document.getElementById("nero_piccolo5"), document.getElementById("nero_piccolo6"),
               document.getElementById("nero_piccolo7"), document.getElementById("nero_piccolo8"), document.getElementById("nero_piccolo9"), document.getElementById("nero_piccolo10"), document.getElementById("nero_piccolo11")];

  if(minuti<5 || minuti>=60 || ore > 23 || (minuti>=60 && ore > 23)) {for(var i=0;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=5 && minuti <10) {for(var i=1;i<nero3.length;i++) {nero3[0].style.backgroundColor = "red";nero3[i].style.backgroundColor = "black";}}
  if (minuti>=10 && minuti <15) {for(var j=0;j<2;j++) {nero3[j].style.backgroundColor = "red";} for(var i=2;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=15 && minuti <20) {for(var j=0;j<3;j++) {nero3[j].style.backgroundColor = "red";} for(var i=3;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=20 && minuti <25) {for(var j=0;j<4;j++) {nero3[j].style.backgroundColor = "red";} for(var i=4;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=25 && minuti <30) {for(var j=0;j<5;j++) {nero3[j].style.backgroundColor = "red";} for(var i=5;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=30 && minuti <35) {for(var j=0;j<6;j++) {nero3[j].style.backgroundColor = "red";} for(var i=6;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=35 && minuti <40) {for(var j=0;j<7;j++) {nero3[j].style.backgroundColor = "red";} for(var i=7;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=40 && minuti <45) {for(var j=0;j<8;j++) {nero3[j].style.backgroundColor = "red";} for(var i=8;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=45 && minuti <50) {for(var j=0;j<9;j++) {nero3[j].style.backgroundColor = "red";} for(var i=9;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=50 && minuti <55) {for(var j=0;j<10;j++) {nero3[j].style.backgroundColor = "red";} for(var i=10;i<nero3.length;i++) {nero3[i].style.backgroundColor = "black";}}
  if (minuti>=55 && minuti <60) {for(var i=0;i<nero3.length;i++) {nero3[i].style.backgroundColor = "red";}}

  var nero4 = [document.getElementById("nero9"), document.getElementById("nero10"), document.getElementById("nero11"), document.getElementById("nero12")];
  var minuti_1 = (minuti-1)%5, minuti_2 = (minuti-2)%5, minuti_3 = (minuti-3)%5, minuti_4 = (minuti-4)%5, minuti_5 = minuti%5;

  if (minuti_5 == 0 || minuti >= 60) {for(var i=0;i<nero4.length;i++) {nero4[i].style.backgroundColor = "black";}}
  if (minuti_1 == 0 || minuti == 1) {for(var i=1;i<nero4.length;i++) {nero4[0].style.backgroundColor = "red";nero4[i].style.backgroundColor = "black";}}
  if (minuti_2 == 0 || minuti == 2) {for(var i=2;i<nero4.length;i++) {nero4[i-2].style.backgroundColor = "red";nero4[i].style.backgroundColor = "black";}}
  if (minuti_3 == 0 || minuti == 3) {for(var i=0;i<nero4.length-1;i++) {nero4[i].style.backgroundColor = "red";nero4[nero4.length-1].style.backgroundColor = "black";}}
  if (minuti_4 == 0 || minuti == 4) {for(var i=0;i<nero4.length;i++) {nero4[i].style.backgroundColor = "red";}}
}
