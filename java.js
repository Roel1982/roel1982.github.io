
function generateprofile() {
      document.getElementById('nieuwenaam').innerHTML       = document.getElementById('naam').value ;
      document.getElementById('nieuweleeftijd').innerHTML   = document.getElementById('leeftijd').value ;
      document.getElementById('nieuwewoonplaats').innerHTML = document.getElementById('woonplaats').value ;
      document.getElementById('nieuwebaan1').innerHTML      = document.getElementById('baan1').value ;
      document.getElementById('nieuwebaan2').innerHTML      = document.getElementById('baan2').value ;
      document.getElementById('nieuweopleiding').innerHTML  = document.getElementById('opleiding').value ;
      document.getElementById('nieuweuren').innerHTML       = document.getElementById('uren').value ;
      document.getElementById('nieuwvervoer1').innerHTML    = document.getElementById('vervoer1').value ;
      document.getElementById('nieuwvervoer2').innerHTML    = document.getElementById('vervoer2').value ;
      document.getElementById('nieuwvervoer3').innerHTML    = document.getElementById('vervoer3').value ;
      document.getElementById('nieuwkernwoord1').innerHTML  = document.getElementById('kernwoord1').value ;
      document.getElementById('nieuwkernwoord2').innerHTML  = document.getElementById('kernwoord2').value ;
      document.getElementById('nieuwkernwoord3').innerHTML  = document.getElementById('kernwoord3').value ;
      document.getElementById('nieuwtelefoon').innerHTML    = document.getElementById('telefoon').value ;
      document.getElementById('nieuwemail').innerHTML       = document.getElementById('email').value ;
      document.getElementById('nieuwvrijeinvoer').innerHTML = document.getElementById('vrijeinvoer').value ;

      if (document.getElementById('vrijeinvoer').value.length < 50)
      {
      alert("De vrije invoer is te kort, minimaal 50 tekens.")
      }
      if (document.getElementById('vrijeinvoer').value.length > 2000)
      {
      alert("De vrije invoer is te lang, maximaal 2000 tekens.")
      }
    }
    function formReset() {
        document.getElementById("frm1").reset();
    }
