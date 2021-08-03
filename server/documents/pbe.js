module.exports = ({Agencers ,Fonction ,Civilité ,Nom ,Prénom ,Tél ,Mobile,Mail ,rs ,Siret ,siren ,Immatriculé ,juridique ,Adresse ,postal ,Ville ,ape,Acte ,Durée ,NombreSites ,NombreUsers ,THD ,DSL ,OTT ,Simple ,Gestionnaire ,Mutualisé ,Conformité1 ,Conformité2 ,Conformité3 ,Switch1 ,Switch2 ,Switch3 ,Groupement ,Accueil ,Ligne1 ,Ligne2 ,Ligne3,Ligne4,Ligne5 ,Ligne6 ,Ligne7 ,Poste1,Poste2 ,Poste3,Poste4 ,Accesoire1,Accesoire2 ,Accesoire3,Accesoire4,Accesoire5 ,Accesoire6,option1,option2 ,option3,option4,option5 ,option6 ,inst1,inst2 ,inst3 ,inst4 ,inst5,inst6 ,inst7,inst8 ,inst9 ,inst10 ,inst11 ,inst12 ,inst13 ,inst14 ,fact1 ,fact2 ,fact3 ,fact4,numM,siteT1,port1 ,siteT,numF,optionL7,optionV7,conv7,siteT9,civ9,prenom9,typeL9,optionL9,numM9,conv9 ,port,numF8,civ8,optionV9 ,civ,acc,typeP1,optionV1,conv1,optionV2,siteT3,nom3,email4,typeP4,siteT5,optionL5,optionV5,numM5,optionV6,conv6,numF7,nom7 ,nom,port3,port5,typeL6,optionL6 ,prenom,email,typeP,optionL2 ,typeL ,optionL ,optionV ,conv ,numF1 ,civ1 ,nom1 ,prenom1 ,email1 ,typeL1 ,optionL1 ,acc1 ,numM1 ,siteT2 ,numF2 ,port2 ,civ2 ,nom2 ,prenom2 ,email2 ,typeL2 ,typeP2 ,acc2 ,numM2 ,conv2 ,numF3 ,civ3 ,prenom3 ,email3 ,typeL3 ,typeP3 ,optionL3 ,acc3 ,optionV3 ,numM3 ,conv3 ,siteT4 ,numF4 ,port4 ,civ4 ,nom4 ,prenom4 ,typeL4 ,optionL4 ,acc4 ,optionV4 ,numM4 ,conv4 ,numF5 ,civ5 ,nom5 ,prenom5 ,email5 ,typeL5 ,typeP5 ,acc5 ,conv5 ,siteT6 ,numF6 ,port6 ,civ6 ,nom6 ,prenom6 ,email6 ,typeP6 ,acc6 ,numM6 ,siteT7 ,port7 ,civ7 ,prenom7 ,email7, typeL7 ,typeP7 ,acc7 ,numM7 ,siteT8 ,port8 ,nom8 ,prenom8 ,email8 ,typeL8 ,typeP8 ,optionL8 ,acc8 ,optionV8 ,numM8 ,conv8 ,numF9 ,port9 ,nom9 ,email9 ,typeP9 ,acc9 ,conv9v}) => {
    const today = new Date();
 return `
 <!DOCTYPE html>
 <html>
 
 <head>

 <style>
 body {
    margin-top:30px;
    margin-right:100px;
    margin-bottom:10px;
    margin-left:100px;
   }
 img{
    width:150%;
    max-width:200px
  }
  .thtitre1{
    width: 30%;
    font-size:12px;   
  } 
  .title {
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    width:100%;
    font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
    background-color:#E31515;
  }
  table, td, th {
    border: 1px solid black;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  h4{
      color:red;
      border-style: solid;
      border-bottom: thick line #ff0000;
      border-top: none;
      border-left: none;
      border-right: none;
      width: 90%;
  }
  .tableaux{
    display:inline-block;
    vertical-align:top;
  }
  .container {
    display: grid;
    grid: repeat(2, 60px) / auto-flow 80px;
  }
  
  .container div {
    background-color: #8ca0ff;
    width: 50px;
    height: 50px;
  }
  .no-outline{
    outline: none;
    border: 0px solid;
    box-shadow:none;
    border-color : #FFFFFF;
    border:none;
    }

    .footer{
      
        border-style:solid;
        border-bottom: thick line #ff0000;
        border-bottom-color:#ff0000;
        border-top: thick line;
        border-left: none;
        border-right: none;
        width: 90%;
        text-align :  center;
        font-size:7px;
    
    }
    .temp{
      border:none;
    }
    h3{
      color:red;
      border-style: solid;
      border-bottom: thick line #ff0000;
      border-top: none;
      border-left: none;
      border-right: none;
      width: 50%;
  }
  h2{
    color:red;
    border-style: solid;
    border-bottom: thick line #ff0000;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 90%;
}      
    
 </style>
     <meta charset="UTF-8">
 <title>BDC PBE</title>

   
   
 
   
   
     
    

</head>
<body>
<table style="width:90%;border:none" >
  <tr>
    <th class="thtitre1" style="border:none"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Logo_SFRBusiness.jpg"></th>
    <th class="title" style="border:none"><p>Bon de commande</p>
    <p>Pack Busniness Entreprises</p></th>
     
</table>
<br>

<h4 style="font-family:arial"> Identification de l'équipe commerciale</h4>
<br>
<table style="width:45%; font-size:8.5px;" >
<tr>
<th colspan="4" style="background-color:#9C9A9A;height: 15px;"></th>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Agence/Partenaire</td>
<td colspan="3" style="text-align:center;" >${Agencers}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Nom du commercial (IC1)</td>
<td colspan="3" style="text-align:center; " ><input type="text" id="nom" /></td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;background-color:#C3BFBF;">Téléphone</td>
<td colspan="3" style="text-align:center; " ><input type="text" id="phone" /></td>
</tr>
<tr>
<td style="width:40%;font-weight: bold;">Mail</td>
<td colspan="3" style="text-align:center;" ><input type="text" id="mail" /></td>

</tr>
<tr>
<td style="width:40%; font-weight: bold;background-color:#C3BFBF;">Nom de l'avant-vente</td>
<td colspan="3" style="text-align:center; " ></td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Nom du commercial (IC2)</td>
<td colspan="3" style="text-align:center;" ><input type="text" id="nomc" /></td>

</tr>
</table>
<h4 style="font-family:arial"> Coordonnées du client</h4>
<br>
<div class="tableaux">
<table style="width:175%; font-size:8.5px;" >
<tr>
<th colspan="4" style="background-color:#9C9A9A;height: 15px;">Signataire client</th>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Fonction</td>
<td colspan="3" style="text-align:center;" >${Fonction}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">civilité du représentant</td>
<td colspan="3" style="text-align:center; " >${Civilité}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Nom</td>
<td colspan="3" style="text-align:center;" >${Nom}</td>

</tr>
<tr>
<td style="width:40%; font-weight: bold;">Prénom</td>
<td colspan="3" style="text-align:center; " >${Prénom}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Tél</td>
<td colspan="3" style="text-align:center;" >${Tél}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Mobile</td>
<td colspan="3" style="text-align:center; " >${Mobile}</td>
</tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Mail</td>
<td colspan="3" style="text-align:center;" >${Mail}</td>
</tr>
</table>
</div>
<div class="tableaux" style="padding-left:230px;">
<table style="width:175%; font-size:8.5px;" >
<tr>
<th colspan="4" style="background-color:#9C9A9A;height: 15px;">Raison sociale</th>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Dénomination  sociale</td>
<td colspan="3" style="text-align:center;" >${rs}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Siret du Siège</td>
<td colspan="3" style="text-align:center; " >${Siret}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Immatriculé au RCS de</td>
<td colspan="3" style="text-align:center;" >${Immatriculé}</td>

</tr>
<tr>
<td style="width:40%; font-weight: bold;">Forme juridique</td>
<td colspan="3" style="text-align:center; " >${juridique}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Adresse du siège</td>
<td colspan="3" style="text-align:center;" >${Adresse}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Code postal</td>
<td colspan="3" style="text-align:center; " >${postal}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Ville</td>
<td colspan="3" style="text-align:center;" >${Ville}</td>
</tr>
</table>
</div>
<br>
<br>
<br>
<div class="tableaux">
<table style="width:412px; font-size:8.5px;" >
<tr>
<th colspan="4" style="background-color:#9C9A9A;height: 15px;">Représentant technique principal</th>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Fonction</td>
<td colspan="3" style="text-align:center;" >${Fonction}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">civilité du représentant</td>
<td colspan="3" style="text-align:center; " >${Civilité}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Nom</td>
<td colspan="3" style="text-align:center;" >${Nom}</td>

</tr>
<tr>
<td style="width:40%; font-weight: bold;">Prénom</td>
<td colspan="3" style="text-align:center; " >${Prénom}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Tél</td>
<td colspan="3" style="text-align:center;" >${Tél}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Mobile</td>
<td colspan="3" style="text-align:center; " >${Mobile}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Mail</td>
<td colspan="3" style="text-align:center;" >${Mail}</td>
</tr>
</table>
</div>
<div class="tableaux" style="padding-left:55px;">
<table style="width:430px; font-size:8.5px;" >
<tr>
<th colspan="4" style="background-color:#9C9A9A;height: 15px;">Administrateur Extranet Espace Client</th>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Fonction</td>
<td colspan="3" style="text-align:center;" >${Fonction}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">civilité du représentant</td>
<td colspan="3" style="text-align:center; " >${Civilité}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Nom</td>
<td colspan="3" style="text-align:center;" >${Nom}</td>

</tr>
<tr>
<td style="width:40%; font-weight: bold;">Prénom</td>
<td colspan="3" style="text-align:center; " >${Prénom}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Tél</td>
<td colspan="3" style="text-align:center;" >${Tél}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Mobile</td>
<td colspan="3" style="text-align:center; " >${Mobile}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Mail</td>
<td colspan="3" style="text-align:center;" >${Mail}</td>
</tr>
</table>
</div>
<br>
<h4 style="font-family:arial"> Le contrat</h4>
<div class="tableaux">
<table style="width:127%; font-size:8.5px;" >

<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Acte contractuel :</td>
<td colspan="3" style="text-align:center;width:70px;" >${Acte}</td>
</tr>

</table>
</div>
<div class="tableaux" style="padding-left:140px;">
<table style="width:112%; font-size:8.5px;" >

<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Durée du contrat :</td>
<td colspan="3" style="text-align:center;width:50px;" >${Durée}</td>
</tr>

</table>
</div>
<br>
<br>
<table style="width:50%;border:none;">
<tr>
<th style="background-color:red;color:#FFFFFF;font-size:7.5px;">N° VPN Mobile</th><th style="width:5px; border:none;"></th><th style="background-color:red;color:#FFFFFF;font-size:7.5px;">N° de titulaire mobile</th><th style="width:5px; border:none;"></th><th style="background-color:red;color:#FFFFFF;font-size:7.5px;">N° d'Affaire</th>
</tr>
<tr>
<td style="height: 10px;"></td><td style="width:5px; border:none;"></td><td></td><td style="width:5px; border:none;"></td><td></td>
</tr>

</table>
<div style="padding-left:150px;">
<p style="font-size:9px;font-weight:bold;line-height: 5px;"><input type="checkbox" checked /><label>Facturation centralisée : une facture pour tous les Sites (avec le détail par Site)</label></p>
<p style="font-size:9px;font-weight:bold;line-height: 5px;"><input type="checkbox"  /><label>Facturation par groupement : plusieurs Sites regroupés par facture</label></p>
<p style="font-size:9px;font-weight:bold;line-height: 5px;"><input type="checkbox"  /><label>Facturation par Site : Une facture pour chaque Site </label></p>
</div>
<h4 style="font-family:arial">Périmètre initial</h4>
<br>

<table style="width:60%;border:none;">
<tr>
<th style="width:22%;background-color:red;font-size:9px;">Nombre de sites</th><th style="width:5%;border:none;"></th><th style="width:30%;background-color:#C3BFBF;font-size:9px;">Type de sites</th><th style="width:17%;font-size:9px;">Quantité</th>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="height: 10px;">${NombreSites}</td><td style="width:8px;border:none;"></td><td>Site Pack Business Entreprises THD</td><td style="text-align:center;">✓</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="width:5px;border:none;"></td><td style="width:5px;border:none;"></td><td>Site Pack Business Entreprises DSL</td><td></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="width:5px;border:none;"></td><td style="width:5px;border:none;"></td><td>Site Pack Business OTT</td><td></td>
</tr>
</table>
<br>
<div style="padding-left:300px;">

<table style="width:49%;">
<tr>
<th style="width:30%;background-color:#C3BFBF;font-size:9px;">Type d'installation</th><th></th>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Option Simple</td><td style="width:17%;"></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Option Standard</td><td></td>
</tr>

</table>
</div>

<br>
<div style="padding-left:300px;">

<table style="width:49%;">
<tr>
<th style="width:30%;background-color:#C3BFBF;font-size:9px;">Type de formation</th><th></th>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Formation avancée Gestionnaire (2 personnes)</td><td style="width:17%;"></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Formation avancée Utilisateur (15 personnes)</td><td></td>
</tr>

</table>
</div>
<br>
<div style="padding-left:300px;">

<table style="width:49%;">
<tr>
<th style="width:30%;background-color:#C3BFBF;font-size:9px;">Type d'options site</th><th></th>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Option Internet Mutualisé</td><td style="width:17%;"></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>option Mise en Conformité SFR < 8 Lignes Filaires</td><td></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>option Mise en Conformité SFR < 21 Lignes Filaires</td><td></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>option Mise en Conformité SFR sur Devis</td><td></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Switch managé 8 ports</td><td></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Switch managé 24 ports</td><td></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Switch managé 48 ports</td><td></td>
</tr>

</table>
</div>
<br>
<div style="padding-left:300px;">

<table style="width:49%;">
<tr>
<th style="width:30%;background-color:#C3BFBF;font-size:9px;">Services optionnels</th><th></th>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Groupement de lignes</td><td style="width:17%;"></td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Accueil Vocal Interactif</td><td></td>
</tr>

</table>
</div>
<br>
<table style="width:60%;border:none;">
<tr>
<th style="width:22%;background-color:red;font-size:9px;">Nombre d'utilisateurs</th><th style="width:5%;border:none;"></th><th style="width:30%;background-color:#C3BFBF;font-size:9px;">Type de ligne</th><th style="width:17%;font-size:9px;"></th>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="height: 10px;">${NombreUsers}</td><td style="width:8px;border:none;"></td><td>Ligne Fixe Absolu</td><td style="text-align:center;">${Ligne1}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="width:5px;border:none;"></td><td style="width:5px;border:none;"></td><td>Ligne Bureau Absolu</td><td>${Ligne2}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="width:5px;border:none;"></td><td style="width:5px;border:none;"></td><td>Ligne Fixe Interne</td><td>${Ligne3}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="width:5px;border:none;"></td><td style="width:5px;border:none;"></td><td>Ligne Bureau Interne</td><td>${Ligne4}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="width:5px;border:none;"></td><td style="width:5px;border:none;"></td><td>Ligne Fax</td><td>${Ligne5}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="width:5px;border:none;"></td><td style="width:5px;border:none;"></td><td>Ligne Softphone Absolu </td><td>${Ligne6}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td style="width:5px;border:none;"></td><td style="width:5px;border:none;"></td><td>Ligne Softphone Interne</td><td>${Ligne7}</td>
</tr>
</table>
<br>
<div style="padding-left:300px;">

<table style="width:49%;">
<tr>
<th style="width:30%;background-color:#C3BFBF;font-size:9px;">Type de poste filaire</th><th></th>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Poste Polycom VVX 310/311/250</td><td style="width:17%;">${Poste1}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Poste DECT IP Yealink W52P</td><td>${Poste2}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Poste Polycom VVX 411/450</td><td>${Poste3}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Poste Polycom VVX 601/650</td><td>${Poste4}</td>
</tr>

</table>
</div>
<br>
<div style="padding-left:300px;">
<table style="width:49%;">
<tr>
<th style="width:30%;background-color:#C3BFBF;font-size:9px;">Accesoires</th><th></th>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Extension Polycom VVX 601</td><td style="width:17%;">${Accesoire1}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Pieuvre Polycom  IP 5000</td><td>${Accesoire2}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Pieuvre SS DUO + 2 micro‐satelittes</td><td>${Accesoire3}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Casque filaire </td><td>${Accesoire4}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Casque sans fil</td><td>${Accesoire5}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Pieuvre individuelle de conference</td><td>${Accesoire6}</td>
</tr>

</table>
</div>
<br>
<div style="padding-left:300px;">
<table style="width:49%;">
<tr>
<th style="width:30%;background-color:#C3BFBF;font-size:9px;">Type d'options</th><th></th>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Microsoft Lync</td><td style="width:17%;">${option1}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Application Réceptionniste</td><td>${option2}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Numéro de fixe pour ligne mobile</td><td>${option3}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Option video </td><td>${option4}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Option  Collaboration avancée</td><td>${option5}</td>
</tr>
<tr style="font-size:7.5px;font-weight:bold">
<td>Option Collaboration premium </td><td>${option6}</td>
</tr>

</table>
</div>
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

<p class="footer">SFR - 1, Square Bela Bartok 75015 Paris - SA au capital de 3 423 265 598,40 € - RCS Paris 343 059 564 - N° TVA FR 71 343 059 564<br>Adresse administrative :  Campus SFR, 12 rue Jean-Philippe Rameau CS 80001 – 93634 La Plaine St Denis Cedex</p>

<br>
<br>
<br>
<br>
<br>
<br>
<br>

<table style="width:90%;border:none" >
  <tr>
    <th class="thtitre1" style="border:none"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Logo_SFRBusiness.jpg"></th>
    <th class="title" style="border:none"><p>Bon de commande</p>
    <p>Pack Busniness Entreprises</p></th>
     
</table>
<p>Le présent Bon de commande est conclu entre</p>
<div class="tableaux" style="width:45%;">
<h4 style="font-family:arial">Le Client</h4>
<br>
<table style="width:80%; font-size:8.5px;" >
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Dénomination  Sociale</td>
<td colspan="3" style="text-align:center;" >${rs}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Siret du siège</td>
<td colspan="3" style="text-align:center; " >${Siret}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Adresse du siège</td>
<td colspan="3" style="text-align:center;" >${Adresse}</td>

</tr>
<tr>
<td style="width:40%; font-weight: bold;">Code postal</td>
<td colspan="3" style="text-align:center; " >${postal}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Ville</td>
<td colspan="3" style="text-align:center;" >${Ville}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Forme juridique</td>
<td colspan="3" style="text-align:center; " >${juridique}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Code APE (NAF)</td>
<td colspan="3" style="text-align:center;" >${ape}</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Siren</td>
<td colspan="3" style="text-align:center; " >${siren}</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">RCS</td>
<td colspan="3" style="text-align:center;" >${Immatriculé}</td>
</tr>
</table>
</div>
<div class="tableaux" style="padding-left:30px;width:45%;">
<h4 style="font-family:arial">SFR</h4>
<br>
<table style="width:80%; font-size:8.5px;" >
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Adresse du siége</td>
<td colspan="3" style="text-align:center;" >1 Square Bela Bartok</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Code Postal</td>
<td colspan="3" style="text-align:center; " >75015 Paris </td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Siren</td>
<td colspan="3" style="text-align:center;" >343 059 564</td>

</tr>
<tr>
<td style="width:40%; font-weight: bold;">Immatriculé au RCS de</td>
<td colspan="3" style="text-align:center; " >Paris</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Forme Juridique</td>
<td colspan="3" style="text-align:center;" >S.A. au capital de 3 423 265 598,40 euros</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">TVA</td>
<td colspan="3" style="text-align:center; " >FR 71 343 059 564 - mars 2012</td>
</tr>
<tr>
<td style="width:40%;background-color:#C3BFBF; font-weight: bold;">Adresse administrative</td>
<td colspan="3" style="text-align:center;" >Campus SFR, 12 rue Jean-Philippe Rameau CS 80001</td>
</tr>
<tr>
<td style="width:40%; font-weight: bold;">Code Postal et Ville</td>
<td colspan="3" style="text-align:center; " >93634 La Plaine St Denis Cedex</td>
</tr>
</table>
</div>
<br>
<h4 style="font-family:arial">Services et Options souscrits par le Client</h4>
<br>
<div style="padding-left:50px;">
<table style="width:20%;font-size:8.5px;font-weight:bold;">
<tr style="background-color:#C3BFBF;">
<th>Services</th><th>Quantité</th>
</tr>
<tr><td>Sites</td><td>${NombreSites}</td></tr>
<tr><td>Formations</td><td></td></tr>
<tr><td>Options sites</td><td></td></tr>
<tr><td>Services optionnels</td><td></td></tr>
<tr><td>Utilisateurs</td><td>${NombreUsers}</td></tr>
<tr><td>Postes Filaires</td><td></td></tr>
<tr><td>Options utilisateurs</td><td></td></tr>
</table>
</div>
<br>
<br>
<h4 style="font-family:arial">Mise en Conformité des Sites</h4>

<p style="font-family:arial;font-size:11px;">
Les infrastructures sur le(s) Site(s) du client concerné(s) par la présente commande doivent être conformes aux prérequis techniques décris dans les Spécifications Techniques d’Accès au Service.<br>
Afin de faciliter la mise en œuvre du Service, SFR Business propose au client une prestation de Mise en Conformité de son infrastructure LAN.<br>
Si le client ne souhaite pas souscrire à la prestation de Mise en Conformité Pack Business Entreprises sur l'un de ses Sites, il prendra à sa charge la mise à niveau de son infrastructure LAN dans un délai maximum de<br>
20JO à compter de la date de signature de la commande, afin de respecter les Spécifications Techniques d’Accès au Service. S’il n’a pas effectué les travaux de mise en conformité dans le délai imparti, la commande<br>
sera annulée de plein droit par SFR Business avec facturation des pénalités pour résiliation anticipée, telles que définies dans l’article 11.1 des Conditions Spécifiques Pack Business Entreprises.</p>

<h4 style="font-family:arial">Terminaux pour Ligne Bureau</h4>
<br>
<div style="padding-left:50px;">
<table style="width:30%;font-size:11px;font-weight:bold;border:none">
<tr>
<th style="border:none"></th><th>Tarifs One-Shot</th>
</tr>
<tr>
<td>Crosscall core X</td><td style="text-align:center">-</td>
</tr>
<tr>
<td>Mobiwire H30 </td><td style="text-align:center">-</td>
</tr>
<tr>
<td>Selection X2</td><td style="text-align:center">-</td>
</tr>
</table>
</div>
<br>
<h4 style="font-family:arial">Accords des parties</h4>
<p style="font-family:arial;font-size:11px;">
Le Client donne mandat à SFR pour effectuer en son nom et pour son compte et au nom et pour le compte de ses mandants, toutes les démarches et opérations nécessaires à la fourniture du Service, y compris la mise<br>
en œuvre de la présélection et de la revente de l'abonnement, du dégroupage total et/ou de la portabilité des lignes décrites en Annexe Technique, dans les conditions définies dans les Conditions Générales et/ou<br>
Particulières du Service. <br>
Le Client certifie exacts les renseignements figurant sur le présent Bon de commande. <br>
Le Client reconnaît disposer d'un exemplaire et avoir pris connaissance des Conditions Générales SFR Business, des Conditions Tarifaires, Conditions Particulières, des Conditions Spécifiques et des Annexes<br>
Techniques, Administratives et Tarifaires associées applicables aux Services souscrits, objets du présent Bon de commande. <br>
Le Client reconnaît que la signature du présent Bon de Commande emporte acceptation de l’ensemble des documents précités non modifiés, sans qu’il soit nécessaire qu’ils soient séparément et spécifiquement signés, à<br>
l’exception des autorisations de prélèvement et des conditions de parution dans les annuaires.<br>
Les informations recueillies et transmises dans le cadre de la présente souscription peuvent donner lieu à l’exercice du droit individuel de rectification auprès de SFR. Le Client accepte expressément que ces informations<br>
soient utilisées par SFR à des fins de prospection et SFR se réserve le droit de communiquer les dites informations à des tiers.
</p>
<br>
<br>
<br>
<br>
<br>
<table class="temp">
         <tbody>
             <tr class="temp" style="width:50%">
 
                 <th style="text-align: left;width:50%; font-size:9px;" class="temp" ><label>Pour le Client</label></th>
                 <th style="text-align: left;width:50%; font-size:9px;" class="temp" ><label>Pour SFR,</label></th>
 
 
             </tr>
         </tbody>
        
         
         <tbody>
         
             <tr class="temp">
          
 
               <td rowspan="5" class="temp">
               <table class="temp">
               <tr class="temp">
               <td rowspan="5" class="temp">
                    <p><label style="font-size : 7.5px; font-family: Arial">Nom du signataire dûment habilité :</label><input class="no-outline" type="text" value="${Nom} ${Prénom} "></p>
                    <p><label style="font-size : 7.5px; font-family: Arial">Fonction :</label><input type="text" class="no-outline" value="${Fonction} "></p>
                     </<td>
                     <td rowspan="5" class="temp"><textarea style="height:100px;font-size: 7px;width:100px">Signature et Cachet commercial</textarea>
                     </td>
                     </tr>
                     </table>
                     <table class="temp">
                     <tr class="temp">
                     <td class="temp"><label style="font-size : 7.5px; font-family: Arial">Fait à :</label><input type="text" class="no-outline" value="${Ville} "></td>
                     <td class="temp"><label style="font-size : 7.5px; font-family: Arial">Date :</label><input type="text" class="no-outline"  value=" ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}"></td>
                     </tr>
                     </table>
                    
                 </td>
                 <td rowspan="5" class="temp">
                 <table class="temp">
                 <tr class="temp">
                  <td rowspan="5" class="temp" style="width:60%">
                 <p><label style="font-size : 7.5px; font-family: Arial">Nom du signataire dûment habilité: </label></p>
                     
                     <p><label style="font-size : 7.5px; font-family: Arial">Fonction : </label></p>
                     <p><label style="font-size : 7.5px; font-family: Arial">Date : </label></p>
                     
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
<br>
<br>
<br>

     <p class="footer">Adresse administrative : Campus SFR, 12 rue Jean-Philippe Rameau CS 80001 – 93634 La Plaine St Denis Cedex</p>
     <br>
     <br>
     <br>
     <br>
     <br>
     <h3>Sites Installation Pack Business Entreprises</h3>

     <br>
     <br>
     
     <table style="border:none; font-size:8px;width:105%;">
     <tr>
     <th colspan="5" style="border:none;"></th><th colspan="10"  style="background-color:#9C9A9A;">Coordonnées des sites Pack Business Entreprises</th><th colspan="10"  style="background-color:#9C9A9A;">Eléments de Téléphonie sur site</th>
     </tr>
     <tr style="background-color:#9C9A9A;">
     <th style="width:80px;">Nom du site</th><th>Typologie de site</th><th>Mise en Conformité SFR</th><th>Migration d'offre Téléphonie Fixe</th><th>Type d'installation </th><th style="width:80px;">Raison sociale</th><th style="width:60px;">Siret</th><th style="width:80px;">Adresse </th><th>Complément <br>d'adresse</th><th  style="width:50px;">Code postal</th><th  style="width:50px;">Ville</th><th style="width:80px;">NOM DU SITE SUR LA FACTURE</th><th style="width:50px;">Nom du représentant du Site</th><th>N° téléphone</th><th>Adresse mail</th><th>Opérateur actuel</th><th style="width:15px;">NDI d'éligibilité</th><th style="width:30px;">Type d'éligibilité</th><th style="width:15px;">cession de la ligne <br>pour un dégroupage <br>total</th><th style="width:15px;">Nombre de Numéros à porter</th><th style="width:15px;">Nombre d'utilisateurs fixes et fax</th><th style="width:15px;">Nombre d'utilisateurs Bureau</th><th style="width:15px;">Nombre d'options (avec numéro de téléphone)</th><th style="width:15px;">Inscriptions annuaires</th><th>Commentaire</th>
     </tr>
     <tr>
     <td>${rs}</td><td>${inst1}</td><td>${inst2}</td><td>${inst3}</td><td>${inst4}</td><td>${rs}</td><td>${Siret}</td><td>${Adresse}</td><td></td><td>${postal}</td><td>${Ville}</td><td>${rs}</td><td>${Nom}</td><td>${Tél}</td><td>${Mail}</td><td>${inst5}</td><td>${inst6}</td><td>${inst7}</td><td>${inst8}</td><td>${inst9}</td><td>${inst10}</td><td>${inst11}</td><td>${inst12}</td><td>${inst13}</td><td>${inst14}</td>
     </tr>
     </table>
     
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
     <h3>LISTE DES SITES DE FACTURATION</h3>
     <br>
     <br>
     <table style="border:none;font-size:8px;width:105%;">
     <tr>
     <th style="border:none;"></th><th colspan="8" style="background-color:#9C9A9A;">informations administratives</th><th colspan="5" style="background-color:#9C9A9A;">adresse d'envoi de la facture si différente de l'adresse du site</th><th colspan="4" style="background-color:#9C9A9A;">Coordonnées du destinataire de la facture</th><th colspan="2" style="background-color:#9C9A9A;">Relevé d'identité bancaire</th>
     </tr>
     <tr style="background-color:#9C9A9A;">
     <th>NOM DU SITE SUR LA FACTURE</th><th>RAISON SOCIALE</th><th style="width:60px;">Siret</th><th style="width:80px;">Adresse</th><th>Complément adresse</th><th>Code Postal</th><th style="width:60px;">Ville</th><th>Mode Paiement</th><th>Site Central ?</th><th style="width:80px;">raison Sociale</th><th>adresse d'expédition</th><th style="width:50px;">Complément adresse d'envoi</th><th style="width:50px;">Code Postal d'envoi</th><th>Ville d'envoi</th><th style="width:60px;">Nom</th><th style="width:60px;">Prénom</th><th style="width:60px;">Tél</th><th>Adresse e-mail</th><th>ID CF ou PF</th><th>Facture EDI</th>
     </tr>
     <tr>
     <td>${rs}</td><td>${rs}</td><td>${Siret}</td><td>${Adresse}</td><td></td><td>${postal}</td><td>${Ville}</td><td>${fact1}</td><td>${fact2}</td><td>${rs}</td><td>${Adresse}</td><td></td><td>${postal}</td><td>${Ville}</td><td>${Nom}</td><td>${Prénom}</td><td>${Tél}</td><td>${Mail}</td><td>${fact3}</td><td>${fact4}</td>
     </tr>
     </table>
     <br>
     <br>
     <br>
     <br>
     <br>
     <br>
     <br>
     <br>
     <br>
     <h2 style="text-align:center;">Plan de numérotation</h2>
     <br>
     <br>
     <table style="border:none;font-size:8px;width:105%;">
     <tr>
     <th style="border:none;"></th><th colspan="11" style="background-color:#9C9A9A;">Utilisateur fixe</th><th colspan="2" style="background-color:#9C9A9A;">Ligne mobile</th>
     </tr>
     <tr style="background-color:#9C9A9A;">
     <th>Nom du Site Technique</th><th>Numéro fixe</th><th style="width:30px;">Portabilité</th><th style="width:30px;">Civilité</th><th>Nom</th><th>Prénom</th><th>E-mail</th><th>Type de poste</th><th>Type de poste</th><th>Options sur ligne </th><th>Accessoires </th><th style="width:30px;">Option Video (ligne Softphone)</th><th>N° mobile</th><th>Convergence</th>
     </tr>
     <tr>
     <td>${siteT}</td><td>${numF}</td><td>${port}</td><td>${civ}</td><td>${nom}</td><td>${prenom}</td><td>${email}</td><td>${typeL}</td><td>${typeP}</td><td>${optionL}</td><td>${acc}</td><td>${optionV}</td><td>${numM}</td><td>${conv}</td>
     </tr>
     <tr>
     <td>${siteT1}</td><td>${numF1}</td><td>${port1}</td><td>${civ1}</td><td>${nom1}</td><td>${prenom1}</td><td>${email1}</td><td>${typeL1}</td><td>${typeP1}</td><td>${optionL1}</td><td>${acc1}</td><td>${optionV1}</td><td>${numM1}</td><td>${conv1}</td>
     </tr>
     <tr>
     <td>${siteT2}</td><td>${numF2}</td><td>${port2}</td><td>${civ2}</td><td>${nom2}</td><td>${prenom2}</td><td>${email2}</td><td>${typeL2}</td><td>${typeP2}</td><td>${optionL2}</td><td>${acc2}</td><td>${optionV2}</td><td>${numM2}</td><td>${conv2}</td>
     </tr>
     <tr>
     <td>${siteT3}</td><td>${numF3}</td><td>${port3}</td><td>${civ3}</td><td>${nom3}</td><td>${prenom3}</td><td>${email3}</td><td>${typeL3}</td><td>${typeP3}</td><td>${optionL3}</td><td>${acc3}</td><td>${optionV3}</td><td>${numM3}</td><td>${conv3}</td>
     </tr>
     <tr>
     <td>${siteT4}</td><td>${numF4}</td><td>${port4}</td><td>${civ4}</td><td>${nom4}</td><td>${prenom4}</td><td>${email4}</td><td>${typeL4}</td><td>${typeP4}</td><td>${optionL4}</td><td>${acc4}</td><td>${optionV4}</td><td>${numM4}</td><td>${conv4}</td>
     </tr>
     <tr>
     <td>${siteT5}</td><td>${numF5}</td><td>${port5}</td><td>${civ5}</td><td>${nom5}</td><td>${prenom5}</td><td>${email5}</td><td>${typeL5}</td><td>${typeP5}</td><td>${optionL5}</td><td>${acc5}</td><td>${optionV5}</td><td>${numM5}</td><td>${conv5}</td>
     </tr>
     <tr>
     <td>${siteT6}</td><td>${numF6}</td><td>${port6}</td><td>${civ6}</td><td>${nom6}</td><td>${prenom6}</td><td>${email6}</td><td>${typeL6}</td><td>${typeP6}</td><td>${optionL6}</td><td>${acc6}</td><td>${optionV6}</td><td>${numM6}</td><td>${conv6}</td>
     </tr>
     <tr>
     <td>${siteT7}</td><td>${numF7}</td><td>${port7}</td><td>${civ7}</td><td>${nom7}</td><td>${prenom7}</td><td>${email7}</td><td>${typeL7}</td><td>${typeP7}</td><td>${optionL7}</td><td>${acc7}</td><td>${optionV7}</td><td>${numM7}</td><td>${conv7}</td>
     </tr>
     <tr>
     <td>${siteT8}</td><td>${numF8}</td><td>${port8}</td><td>${civ8}</td><td>${nom8}</td><td>${prenom8}</td><td>${email8}</td><td>${typeL8}</td><td>${typeP8}</td><td>${optionL8}</td><td>${acc8}</td><td>${optionV8}</td><td>${numM8}</td><td>${conv8}</td>
     </tr>
     <tr>
     <td>${siteT9}</td><td>${numF9}</td><td>${port9}</td><td>${civ9}</td><td>${nom9}</td><td>${prenom9}</td><td>${email9}</td><td>${typeL9}</td><td>${typeP9}</td><td>${optionL9}</td><td>${acc9}</td><td>${optionV9}</td><td>${numM9}</td><td>${conv9}</td>
     </tr>
     </table>



</body>

 </html>
    `;
 };