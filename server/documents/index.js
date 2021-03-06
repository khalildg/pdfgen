module.exports = ({ rs,siren,num,rue,codePostal,ville,contratRef,commentaire,nomPrenom,fonction,phone,mail}) => {
    const today = new Date();
 return `
 <!DOCTYPE html>
 <html>
 
 <head>
     <meta charset="UTF-8">
     <title>Document</title>
     

     <style>
     body {
      margin-top:30px;
      margin-right:30px;
      margin-bottom:10px;
      margin-left:30px;
     }
     table, td, th {
        border: 1px solid black;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
      }
      .title {
        color: red;
        text-align: center;
        font-size: 12px;
        width : 70%;
        font-family: Arial;
      }
      img{
        width:150%;
        max-width:200px
      }
      .tdtitre {
        height: 30px;
      }
      .thtitre1{
        width: 30%;
        font-size:12px;   
      }
      .titre {
        color: red;
        text-align: center;
        font-size: 12;
        background-color: rgb(212, 211, 211);
        padding: auto ;
        
      }
      .table{
          padding-top : 20px;
          font-family: malgun gothic;
          font-size : 8px
      }
      .tableau {
        width: 50%;
        margin-bottom: 1rem;
        color: #212529;
        margin-left: 20%;
      }
      .text {
        text-align: center;
        font-family: Georgia;
        font-size : 7px;
      }
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #2196F3;
        padding: 10px;
      }
      .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
      }
      .no-outline{
        outline: none;
        border: 0px solid;
        font-size : 7.5px;
        font-family: Arial;
      }
      .temp{
        border:none;
      }
     </style>
    

</head>
<body>
<div>
<table>
  <tr>
    <th class="thtitre1"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Logo_SFRBusiness.jpg">
    <p style="font-size:7.5px;font-family: malgun gothic;">SFR Business, marque du groupe SFR,<br> est ?? destination des entreprises</p></th>
    <th class="title"><p>Migration de l???offre data de Pack Business Entrepreneurs</p>
    <p>vers l???offre Acc??s Max</p>
    <p>(anciennement d??nomm??es 9dsl, 9dsl+, SFR DSL, SFR DSL+)</p></th>
  </tr>
  <tr> 
  <td class="tdtitre"></td>
  <td class="tdtitre"></td>
  </tr>    
</table>
</div>
<p style="font-weight: bold ; font-size:10px">Le Pr??sent avenant est conclu entre : </p>

<table class="titre">
<tr>
<th>Le Client</th>
</tr>
</table>
<br>








<table class="table">
<tr>

    <th>D??nomination sociale</th>
    <th>Raison Sociale </th>
    <td>${rs}</td>
    <th>SIREN</th>
    <td>${siren}</td>

</tr>
<tr>

    <td></td>
    <th>Forme juridique</th>
    <td></td>
    <th>RCS</th>
    <td></td>

</tr>
<tr>

    <th>Adresse du si??ge</th>
    <th>N??</th>
    <td>${num}</td>
    <th>Rue</th>
    <td>${rue}</td>

</tr>
<tr>
    <td></td>  
    <th>Code Postal</th>
    <td>${codePostal}</td>
    <th>ville</th>
    <td>${ville}</td>

</tr>


  </table>
  <br>

  <table class="titre">
  <tr>
  <th>Et SFR</th>
  </tr>
  </table>
  <br>

  <table class="table">
         <tbody>
             <tr>
 
                 <th rowspan="2"> D??nomination sociale</th>
                 <th> Raison Sociale </th>
                 <td> SFR</td>
                 <th> SIREN</th>
                 <td> 343 059 564</td>
 
             </tr>
         </tbody>
         <tbody>
             <tr>
 
                 <td></td>
                 <th> Forme juridique</th>
                 <td> S.A. au capital de 3 423 265 598,40 euros </td>
                 <th> RCS</th>
                 <td> Paris</td>
 
             </tr>
             <tr>
 
                 <td></td>
                 <th> TVA</th>
                 <td colspan="3"> FR 71 343 059 564 - mars 2012 </td>
 
 
             </tr>
             <tr>
 
                 <th> Adresse du si??ge</th>
                 <th> N??</th>
                 <td> 16</td>
                 <th> Rue</th>
                 <td> Rue du G??n??ral Alain de Boissieu</td>
 
             </tr>
             <tr>
                <td></td>
                 <th> Code Postal</th>
                 <td> 75015</td>
                 <th> ville</th>
                 <td> Paris</td>
 
             </tr>
 
         </tbody>
     </table>
     <br>
     <table class="titre">
<tr>
<th>Pr??ambule</th>
</tr>
</table>
<p style="font-size:10px">Nous vous rappelons que votre offre PBR int??gral et int??gral max incluent les services suivants : </p>
<table class="tableau">
         <tbody>
             <tr>
 
                 <th scope="col" style="text-align: center;">Inclus dans l'offre PBR </th>
                 <th scope="col" style="text-align: center;">Offre Cible </th>
 
 
             </tr>
         </tbody>
         <tbody>
             <tr>
 
                 <td rowspan="4">
                     <p class="text">Ligne Bureau </p>
                     <p class="text ">Ligne Nomade + Option num??ro fixe sur mobile </p>
                     <p class="text ">Ligne Fax</p>
                     <p class="text ">Acc??s internet ADSL (pour l???int??gral) et FOM (pour l???int??gral Max) </p>
                 </td>
                 <td rowspan="4">
                     <p class="text">PBE</p>
                     <p class="text ">Offre Mobile +PBE </p>
                     <p class="text ">SFR Business LA VGA </p>
                     <p class="text ">Offre Data</p>
                 </td>
             </tr>
             <tr> </tr>
             <tr> </tr>
             <tr> </tr>
 
         </tbody>
     </table>
     <p style="font-family: Arial; font-size : 12px;font-weight: bold;">
         Dans le cadre de la migration PBR vers PBE, votre acc??s DATA deviendra l???offre acc??s max sans impact tarifaire
         sur votre facturation
         globale.
     </p>
     <p style="font-family: Arial; font-size : 12px;">SFR et le Client ont sign?? un contrat r??f??renc?? relatif ?? la fourniture du Service lien DATA (anciennement
         d??nomm?? 9dsl, 9dsl+, SFR DSL, SFR
         DSL+) respectivement). </p>
         <table class="table">
         <tbody>
             <tr>
 
                 <th style="text-align: center;" style="width:30%">Contrat r??f??renc??</th>
                 <td style="width:20%">${contratRef}</td>
                 <th style="text-align: center;" style="width:30%">Date de signature du contrat</th>
                 <td style="width:20%"></td>
 
             </tr>
         </tbody>
     </table>
     <br>
     <table class="titre">
<tr>
<th>P??riode minimale d???engagement</th>
</tr>
</table>
<p style="font-family: Arial; font-size : 12px;">Le pr??sent Avenant a pour objet le r??engagement sur 36 mois de chacun des Acc??s et/ou Lignes pour une nouvelle P??riode Minimale d???Engagement ?? compter de la date d???entr??e en vigueur du pr??sent Avenant. </p>
<table class="titre">
<tr>
<th>Conditions tarifaires</th>
</tr>
</table>
<p style="font-family: Arial; font-size : 12px;">Dans le cas de r??engagement avec ??volutions tarifaires, les Conditions Tarifaires du Contrat sont supprim??es et
         remplac??es par celles annex??es
         au pr??sent Avenant.</p>
     <p style="font-family: Arial; font-size : 12px;">Ces nouvelles Conditions Tarifaires seront applicables dans un d??lai de trente (30) jours suivant la date
         d???entr??e en vigueur du pr??sent Avenant. </p>

         <table class="titre">
<tr>
<th>ACCORD DES PARTIES (fait en 2 exemplaires) </th>
</tr>
</table>
<p style="font-family: Arial; font-size : 12px;">
Le pr??sent Avenant entre en vigueur ?? compter de la date de signature par les parties.
Les autres dispositions du Contrat non modifi??es par le pr??sent Avenant demeurent inchang??es et de plein effet.
</p>
<br>
<br>
<br>
<p style="font-size:6.5px;font-family:corbel">SFR - 16 rue du G??n??ral Alain de Boissieu 75015 PARIS- SA au capital de 3 423 265 598,40 euros - RCS Paris 343 059 564 - N?? TVA FR 71 343 059 564 ??? Bon de Commande Ligne Business IP </p>
<br>
<br>
<table>
  <tr>
    <th class="thtitre1"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Logo_SFRBusiness.jpg">
    <p style="font-size:7.5px;font-family: malgun gothic;">SFR Business, marque du groupe SFR,<br> est ?? destination des entreprises</p></th>
    <th class="title"><p>Migration de l???offre data de Pack Business Entrepreneurs</p>
    <p>vers l???offre Acc??s Max</p>
    <p>(anciennement d??nomm??es 9dsl, 9dsl+, SFR DSL, SFR DSL+)</p></th>
  </tr>
  <tr> 
  <td class="tdtitre"></td>
  <td class="tdtitre"></td>
  </tr>    
</table>

<br>
<br>


<textarea style="width: 100%; height: 120px;" placeholder="Commentaires :">${commentaire}</textarea>
<br>
<br>

  
 
  
  <table class="temp">
         <tbody>
             <tr class="temp" style="width:50%">
 
                 <th style="text-align: left;width:50%; font-size:9px;" class="temp" ><label>Pour le Client, signataire d??ment habilit?? </label></th>
                 <th style="text-align: left;width:50%; font-size:9px;" class="temp" ><label>Pour SFR,</label></th>
 
 
             </tr>
         </tbody>
        
         
         <tbody>
         
             <tr class="temp">
          
 
               <td rowspan="5" class="temp">
               <table class="temp">
               <tr class="temp">
               <td rowspan="5" class="temp">
                    <p><label style="font-size : 7.5px; font-family: Arial">Nom/Pr??nom :</label><input class="no-outline" type="text" value=" ${nomPrenom}"></p>
                    <p><label style="font-size : 7.5px; font-family: Arial">Fonction :</label><input type="text" class="no-outline" value=" ${fonction}"></p>
                     <p><label style="font-size : 7.5px; font-family: Arial">T??l??phone :</label><input type="text" class="no-outline" value=" ${phone}"></p>
                     <p><label style="font-size : 7.5px; font-family: Arial">E-Mail :</label><input type="text" class="no-outline" value=" ${mail}"></p>
                     </<td>
                     <td rowspan="5" class="temp"><textarea style="height:100px;font-size: 7px;width:100px">Signature et Cachet commercial</textarea>
                     </td>
                     </tr>
                     </table>
                     <table class="temp">
                     <tr class="temp">
                     <td class="temp"><label style="font-size : 7.5px; font-family: Arial">Fait ?? :</label><input type="text" class="no-outline" value=" ${ville}"></td>
                     <td class="temp"><label style="font-size : 7.5px; font-family: Arial">Date :</label><input type="text" class="no-outline"  value=" ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}"></td>
                     </tr>
                     </table>
                    
                 </td>
                 <td rowspan="5" class="temp">
                 <table class="temp">
                 <tr class="temp">
                  <td rowspan="5" class="temp" style="width:60%">
                 <p><label style="font-size : 7.5px; font-family: Arial">Nom : </label></p>
                     <p><label style="font-size : 7.5px; font-family: Arial">Pr??nom : </label></p>
                     <p><label style="font-size : 7.5px; font-family: Arial">T??l??phone : </label></p>
                     <p><label style="font-size : 7.5px; font-family: Arial">E-Mail : </label></p>
                     <p><label style="font-size : 7.5px; font-family: Arial">Faite ?? : </labe></p>
                     </<td>
                     <td rowspan="5" class="temp"><textarea style="height:100px;font-size: 7px;width:100px ;">Signature et Cachet commercial</textarea>
                     </td>
                     </tr>
                     </table>   
                 </td>
                
                
             </tr>
             <tr class="temp"> </tr>
             <tr class="temp"> </tr>
             <tr class="temp"> </tr>
 
         </tbody>
         </table>
     </table>


</body>

 </html>
    `;
 };