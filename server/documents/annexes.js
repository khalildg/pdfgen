module.exports = ({lignec1,lignec2,lignec3,lignec4,lignec5,lignec6,lignec7,lignec8,lignec9,Siren,fonction,nom,prenom,téléphone,mobile,Email,Civilité,Civilités,fonctions,noms,prenoms,téléphones,mobiles,Emails,site,siret,etat,id,Adresse,AdresseC,Codepostal,Ville,Remarques,contrat,Numéro,NomSite,SIRETt,type,Fixe,poste,offre,ligne,Fixet,offrec,postec,lignec,duree,NomSite1,SIRETt1,type1,Fixe1,poste1,offre1,ligne1,Fixet1,offrec1,postec1,duree1,NomSite2,SIRETt2,type2,Fixe2,poste2,offre2,ligne2,Fixet2,offrec2,postec2,duree2,NomSite3,SIRETt3,type3,Fixe3,poste3,offre3,ligne3,Fixet3,offrec3,postec3,duree3,NomSite4,SIRETt4,type4,Fixe4,poste4,offre4,ligne4,Fixet4,offrec4,postec4,duree4,NomSite5,SIRETt5,type5,Fixe5,poste5,offre5,ligne5,Fixet5,offrec5,postec5,duree5,NomSite6,SIRETt6,type6,Fixe6,poste6,offre6,ligne6,Fixet6,offrec6,postec6,duree6,NomSite7,SIRETt7,type7,Fixe7,poste7,offre7,ligne7,Fixet7,offrec7,postec7,duree7,NomSite8,SIRETt8,type8,Fixe8,poste8,offre8,ligne8,Fixet8,offrec8,postec8,duree8,NomSite9,SIRETt9,type9,Fixe9,poste9,offre9,ligne9,Fixet9,offrec9,postec9,duree9}) => {
    const today = new Date();
 return `
 <!DOCTYPE html>
 <html>
 
 <head>
 
 

 <style>
 img{
   width:150%;
   max-width:200px
 }
 body {
   margin-top:30px;
   margin-right:30px;
   margin-bottom:10px;
   margin-left:30px;
  }
  .title {
   color: red;
   text-align: center;
   font-size: 12px;
   width : 70%;
   font-family: Arial;
   padding-left:200px;
   font-weight: bold
 }
 table, td, th {
  border: 2px solid gray;
}
table {
  width: 100%;
  border-collapse: collapse;
}
.temp{
  border-left:none;
  border-top:none;
}
.bor{
  border:none;
}
 
</style>
 



 
     <meta charset="UTF-8">
  
     <title>Document</title>

</head>

<body>
<img src="https://www.silvereco.fr/wp-content/2-sfr-bizteam.jpg">
<p style="font-size:7.5px;font-family: malgun gothic; padding-bottom:10px">SFR Business Team, marque du groupe SFR, est à destination des entreprises</p>
<br>
<br>
<p class="title">ANNEXE DE MIGRATION PACK BUSINESS :</p>
<p class="title" style="color:black;">Identification du périmètre Pack Business Entrepreneur (PBR)</p>
<br>
<br>
<br>
<br>
<table style="width:40%; font-size:8.5px;" >
<tr>
<th colspan="4" style="background-color:#9C9A9A;text-align:left;color:#FFFFFF;font-weight: bold;">Représentant Technique Client</th>
</tr>
<tr>
<td style="width:20%;background-color:#C3BFBF;color:#FFFFFF; font-weight: bold;">Fonction</td>
<td>${fonction}</td>
<td style="width:20% ;background-color:#C3BFBF;color:#FFFFFF; font-weight: bold;">Civilité</td>
<td>${Civilité}</td>
</tr>
<tr>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Nom</td>
<td>${nom}</td>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Prénom</td>
<td>${prenom}</td>
</tr>
<tr>
<td style=" background-color:#C3BFBF;color:#FFFFFF; font-weight: bold;">Téléphone</td>
<td>${téléphone}</td>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Mobile</td>
<td>${mobile}</td>
</tr>
<tr>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">E-Mail</td>
<td colspan="3" >${Email}</td>

</tr>
</table>
<br>
<br>
<table style="width:40%; font-size:8.5px;" >
<tr>
<th colspan="4" style="background-color:#9C9A9A;text-align:left;color:#FFFFFF;font-weight: bold;">Représentant Technique SFR</th>
</tr>
<tr>
<td style="width:20%;background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Fonction</td>
<td>${fonctions}</td>
<td style="width:20% ;background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Civilité</td>
<td>${Civilités}</td>
</tr>
<tr>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Nom</td>
<td>${noms}</td>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Prénom</td>
<td>${prenoms}</td>
</tr>
<tr>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Téléphone</td>
<td>${téléphones}</td>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Mobile</td>
<td>${mobiles}</td>
</tr>
<tr>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">E-Mail</td>
<td colspan="3" >${Emails}</td>

</tr>
</table>
<br>
<br>
<table class="temp"> 
<tr>
<th colspan="5" class="temp" style="font-size:7.5px;font-family:arial;" >Indiquer un numéro de site afin de récupérer automatiquement les informations saisies dans cet onglet dans l'onglet suivant</th>
<th colspan="4" style="background-color:#9C9A9A;color:#FFFFFF;font-size:8.5px; style="width:40%;font-weight: bold;">Adresse actuelle du Site Technique</th>
</tr>
<tr style="background-color:#9C9A9A;color:#FFFFFF;font-size:8.5px;font-weight: bold;">
<th style="width:7%;">Numéro du site</th><th>Nom du Site Technique</th><th style="width:15%;">N° SIRET</th><th>Etat du Site Technique</th><th>Master ID</th><th style="width:15%;">Adresse</th><th>Adresse Complément</th><th>Code postal  </th><th style="width:10%;">Ville</th>
</tr>
<tr style="text-align:center;font-size:8.5px;">
<td>1</td><td>${site}</td><td>${siret}</td><td>${etat}</td><td>${id}</td><td>${Adresse}</td><td>${AdresseC}</td><td>${Codepostal}</td><td>${Ville}</td>
</tr>
</table>
<br>
<table>
<tr>
<th style="background-color:#9C9A9A;text-align:left;color:#FFFFFF;font-size:8.5px;font-weight: bold;">Remarques</th>
</tr>
</table>
<textarea style="width:99.77%;height:50px;">${Remarques}</textarea>
<p style="font-size:7.5px;font-family:arial;" >Le Client garantit à SFR qu’il dispose de l’ensemble des droits et pouvoirs nécessaires à l’effet de signer le présent Bulletin de Modification au nom et pour le compte des entités bénéficiaires du Service. En tout état de cause, le Client est solidaire vis-à-vis de SFR de l’exécution de leurs obligations par les entités bénéficiaires du Service, et en </p>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>
 <br>

<p style="font-size:6.8px;font-family:corbel">SFR - SA au capital de 1 345 144 260,15 €<br>
 42 avenue de Friedland-75008 Paris - RCS Paris 403 106 537 <br>
(Adresse administrative : Tour Séquoia - 1, place Carpeaux - 92 915 Paris La Défense Cedex) </p>

<br>
<br>
<br>
<br>
<table>
<tr>
<th colspan="2" class="title">
<p>ANNEXE DE MIGRATION PACK BUSINESS : </p><p style="color:black;"> Modification des lignes existantes associées</p>
</th>
</tr>
</table> 
<br>
<table style="width:40%; font-size:8.5px;" >
<tr>
<th colspan="4" style="background-color:#9C9A9A;text-align:left;color:#FFFFFF;font-weight: bold;">Informations Administratives du Client (OBLIGATOIRE)</th>
</tr>
<tr>
<td style="width:20%;background-color:#C3BFBF;color:#FFFFFF; font-weight: bold;">Dénomination Sociale</td>
<td style="width:20%;">${site}</td>
<td style="width:20% ;background-color:#C3BFBF;color:#FFFFFF; font-weight: bold;">N° SIREN</td>
<td>${Siren}</td>
</tr>
<tr>
<th colspan="4" style="background-color:#9C9A9A;text-align:left;color:#FFFFFF;font-weight: bold;">Contrat SFR (OBLIGATOIRE)</th>
</tr>
<tr>
<td style=" background-color:#C3BFBF;color:#FFFFFF;font-weight: bold;">Numéro de Contrat</td>
<td colspan="3" >${contrat}</td>

</tr>
</table>
<br>
<table style="width:40%; font-size:8.5px;" >
<tr>
<th colspan="4" style="background-color:#9C9A9A;text-align:left;color:#FFFFFF;font-weight: bold;">Distributeur SFR</th>
</tr>
<tr>
<td style="width:20%;background-color:#C3BFBF;color:#FFFFFF; font-weight: bold;">Point de vente</td>
<td colspan="3" style="text-align:center;" >JFCOM</td>
</tr>
<tr>
<td style="width:20%;background-color:#C3BFBF;color:#FFFFFF; font-weight: bold;">Commercial</td>
<td colspan="3" style="text-align:center;" >Stéphane BERTHIER</td>
</tr>
<tr>
<td style="width:20%;background-color:#C3BFBF;color:#FFFFFF; font-weight: bold;">Commercial SFR</td>
<td colspan="3" style="text-align:center;" >NADIA KARA</td>

</tr>
</table>

<br>
<table class="temp"> 
<tr>
<th colspan="4" class="temp"></th>
<th colspan="4" style="background-color:#E90F0F;color:#FFFFFF;font-size:8.5px; style="width:40%;font-weight: bold;">Situation actuelle de la ligne</th>
<th colspan="5" style="background-color:#E90F0F;color:#FFFFFF;font-size:8.5px; style="width:40%;font-weight: bold;">Adresse actuelle du Site Technique</th>
</tr>
<tr style="background-color:#9C9A9A;color:#FFFFFF;font-size:8.5px;font-weight: bold;">
<th style="width:7%;">Numéro du site</th><th>Nom du Site Technique</th><th style="width:8%;">N° SIRET</th><th>Type de demande</th><th style="width:7%;">N° Fixe</th><th>Type de Poste actuel</th><th>Offre actuelle</th><th>Type de ligne</th><th style="width:7%;">N° Fixe </th><th>Offre cible</th><th>Ligne cible</th><th>Poste cible</th><th>Durée</th>
</tr>
<tr style="text-align:center;font-size:8.5px;">
<td>1</td><td>${site}</td><td>${SIRETt}</td><td>${type}</td><td>${Fixe}</td><td>${poste}</td><td>${offre}</td><td>${ligne}</td><td>${Fixet}</td><td>${offrec}</td><td>${lignec}</td><td>${postec}</td><td>${duree}</td>
</tr>
<tr style="text-align:center;font-size:8.5px;">
<td>2</td><td>${NomSite1}</td><td>${SIRETt1}</td><td>${type1}</td><td>${Fixe1}</td><td>${poste1}</td><td>${offre1}</td><td>${ligne1}</td><td>${Fixet1}</td><td>${offrec1}</td><td>${lignec1}</td><td>${postec1}</td><td>${duree1}</td>
</tr><tr style="text-align:center;font-size:8.5px;">
<td>3</td><td>${NomSite2}</td><td>${SIRETt2}</td><td>${type2}</td><td>${Fixe2}</td><td>${poste2}</td><td>${offre2}</td><td>${ligne2}</td><td>${Fixet2}</td><td>${offrec2}</td><td>${lignec2}</td><td>${postec2}</td><td>${duree2}</td>
</tr><tr style="text-align:center;font-size:8.5px;">
<td>4</td><td>${NomSite3}</td><td>${SIRETt3}</td><td>${type3}</td><td>${Fixe3}</td><td>${poste3}</td><td>${offre3}</td><td>${ligne3}</td><td>${Fixet3}</td><td>${offrec3}</td><td>${lignec3}</td><td>${postec3}</td><td>${duree3}</td>
</tr><tr style="text-align:center;font-size:8.5px;">
<td>5</td><td>${NomSite4}</td><td>${SIRETt4}</td><td>${type4}</td><td>${Fixe4}</td><td>${poste4}</td><td>${offre4}</td><td>${ligne4}</td><td>${Fixet4}</td><td>${offrec4}</td><td>${lignec4}</td><td>${postec4}</td><td>${duree4}</td>
</tr><tr style="text-align:center;font-size:8.5px;">
<td>6</td><td>${NomSite5}</td><td>${SIRETt5}</td><td>${type5}</td><td>${Fixe5}</td><td>${poste5}</td><td>${offre5}</td><td>${ligne5}</td><td>${Fixet5}</td><td>${offrec5}</td><td>${lignec5}</td><td>${postec5}</td><td>${duree5}</td>
</tr><tr style="text-align:center;font-size:8.5px;">
<td>7</td><td>${NomSite6}</td><td>${SIRETt6}</td><td>${type6}</td><td>${Fixe6}</td><td>${poste6}</td><td>${offre6}</td><td>${ligne6}</td><td>${Fixet6}</td><td>${offrec6}</td><td>${lignec6}</td><td>${postec6}</td><td>${duree6}</td>
</tr><tr style="text-align:center;font-size:8.5px;">
<td>8</td><td>${NomSite7}</td><td>${SIRETt7}</td><td>${type7}</td><td>${Fixe7}</td><td>${poste7}</td><td>${offre7}</td><td>${ligne7}</td><td>${Fixet7}</td><td>${offrec7}</td><td>${lignec7}</td><td>${postec7}</td><td>${duree7}</td>
</tr><tr style="text-align:center;font-size:8.5px;">
<td>9</td><td>${NomSite8}</td><td>${SIRETt8}</td><td>${type8}</td><td>${Fixe8}</td><td>${poste8}</td><td>${offre8}</td><td>${ligne8}</td><td>${Fixet8}</td><td>${offrec8}</td><td>${lignec8}</td><td>${postec8}</td><td>${duree8}</td>
</tr><tr style="text-align:center;font-size:8.5px;">
<td>10</td><td>${NomSite9}</td><td>${SIRETt9}</td><td>${type9}</td><td>${Fixe9}</td><td>${poste9}</td><td>${offre9}</td><td>${ligne9}</td><td>${Fixet9}</td><td>${offrec9}</td><td>${lignec9}</td><td>${postec9}</td><td>${duree9}</td>
</tr>
<tr>
<th colspan="13" style="background-color:#9C9A9A;text-align:left;color:#FFFFFF;font-size:8.5px;font-weight: bold;">Remarques</th>

</tr>
</table>
<textarea style="width:99.77%;height:50px;"></textarea>
<br>
<br>
<table style="width:20%; font-size:8.5px;">
<tr>
<th colspan="4" style="text-align:left;font-weight: bold;" class="bor"><span style="color:#E90F0F">Pour le client,</span> signataire dûment habilité</th>
</tr>
<tr>
<td style="width:50%; font-weight: bold;" class="bor">Nom&prénom :  ${nom} ${prenom}</td>
</tr>
<tr>
<td style="width:50%; font-weight: bold;" class="bor">Fonction : ${fonction}</td><td class="bor"></td>
</tr>
<tr>
<td style="width:50%; font-weight: bold;" class="bor">E-Mail: ${Email}</td><td class="bor"></td>
</tr>
<tr>
<td style="width:50%; font-weight: bold;" class="bor">Fait à : ${Ville}</td><td class="bor" style="font-weight: bold;">Date : ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}</td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>
<tr>
<td style="width:25%; font-weight: bold;text-align:center;" class="bor">Signature</td><td class="bor" style="font-weight: bold;">Cachet commercial</td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>
<tr>
<td style="width:10%; font-weight: bold;" class="bor"></td><td class="bor"></td>
</tr>

</table>

</body>

 </html>
    `;
 };