// FAQ Data for CNSS and CNOPS - French and Arabic
export const faqData = {
  fr: {
    cnss: {
      title: "FAQ CNSS - Remboursement Médicaments Maroc",
      subtitle: "15 questions essentielles sur le remboursement CNSS des médicaments au Maroc",
      questions: [
        {
          question: "1. Quel est le taux de remboursement CNSS pour les médicaments?",
          answer: `<p>Le taux de remboursement standard de la CNSS est de <strong>70% du Prix Public de Vente (PPV)</strong> pour les médicaments ambulatoires. Pour les médicaments génériques, le remboursement se fait sur la base du prix du générique. Si vous avez une Affection de Longue Durée (ALD) déclarée, le taux peut atteindre entre <strong>77% et 100%</strong> selon la pathologie.</p>
          <p><strong>Important:</strong> Le remboursement se calcule sur le prix du médicament générique s'il existe. En l'absence de générique, le princeps est remboursé par rapport à son prix d'achat.</p>`
        },
        {
          question: "2. Comment se faire rembourser ses médicaments par la CNSS?",
          answer: `<p>Pour obtenir un remboursement, vous devez déposer un dossier comprenant:</p>
          <p><strong>Documents requis:</strong></p>
          <ul>
            <li>Feuille de soins maladie (formulaire Réf. 610.1.02, 610.1.03 ou 610.1.04)</li>
            <li>Ordonnance originale signée et cachetée par votre médecin</li>
            <li>Ordonnance cachetée également par le pharmacien</li>
            <li>Codes à barres de chaque médicament (si absent, joindre la boîte)</li>
            <li>Carte d'immatriculation CNSS</li>
          </ul>
          <p><strong>Où déposer:</strong></p>
          <ul>
            <li>À l'agence CNSS de votre choix</li>
            <li>Par courrier à: 649, bd. Mohammed V BP2186, Casablanca</li>
            <li>Aux points de proximité (Chaabi Cash, Barid Cash, Cash Plus)</li>
          </ul>`
        },
        {
          question: "3. Quel est le délai de remboursement CNSS?",
          answer: `<p>Le délai légal est de <strong>90 jours maximum</strong> à partir de la date de dépôt du dossier complet.</p>
          <p><strong>Important:</strong> Vous disposez d'un délai de 3 mois à compter de la date de délivrance des médicaments pour déposer votre dossier, sinon votre demande sera rejetée.</p>
          <p>Le paiement se fait selon le mode que vous avez choisi (virement bancaire, carte bancaire ou mise à disposition). Pour tout remboursement supérieur à 10 000 MAD, le virement bancaire est obligatoire.</p>`
        },
        {
          question: "4. Qu'est-ce qu'une ALD et comment en bénéficier?",
          answer: `<p><strong>ALD (Affection de Longue Durée)</strong> = maladie chronique nécessitant des soins prolongés et coûteux.</p>
          <p><strong>Liste des principales ALD remboursées:</strong></p>
          <ul>
            <li>Diabète insulinodépendant et non insulinodépendant</li>
            <li>Hypertension artérielle sévère</li>
            <li>Maladies cardiovasculaires (insuffisance cardiaque, infarctus)</li>
            <li>Cancers et chimiothérapie</li>
            <li>Insuffisance rénale chronique</li>
            <li>Maladies neurologiques (Parkinson, Alzheimer, épilepsie)</li>
            <li>VIH/SIDA</li>
            <li>Hépatites chroniques B et C</li>
            <li>Maladies psychiatriques sévères</li>
          </ul>
          <p><strong>Au total:</strong> 41 ALD déclinées en 439 maladies + 10 ALC (Affections Lourdes et Coûteuses).</p>
          <p><strong>Taux de couverture:</strong></p>
          <ul>
            <li>36 ALD donnent lieu à une exonération de 77% à 100%</li>
            <li>Les 10 ALC sont exonérées à 100%</li>
            <li>Dans le secteur public, taux minimal de 90% pour toutes les ALD</li>
          </ul>
          <p><strong>Comment déclarer une ALD:</strong> Déposez un dossier à votre agence CNSS avec certificat médical du spécialiste, bilans confirmant le diagnostic, et rapport médical détaillé. La CNSS peut demander un contrôle médical physique.</p>`
        },
        {
          question: "5. Quels médicaments sont remboursés par la CNSS?",
          answer: `<p>Au démarrage de l'AMO, 1,001 médicaments étaient admis. Aujourd'hui, plus de <strong>9,696 médicaments sont remboursables</strong> (avec 165 ajoutés en 2024 seulement).</p>
          <p>La liste complète est disponible sur le site de l'ANAM (Agence Nationale de l'Assurance Maladie). Vous pouvez également vérifier avec:</p>
          <ul>
            <li>Votre médecin traitant</li>
            <li>Votre pharmacien</li>
            <li>Notre calculateur en ligne sur TAAWIDATY</li>
          </ul>`
        },
        {
          question: "6. Quelle est la différence entre médicament princeps et générique?",
          answer: `<p><strong>Princeps</strong> = médicament d'origine, développé par un laboratoire pharmaceutique (exemple: Doliprane)</p>
          <p><strong>Générique</strong> = copie du princeps avec la même molécule active (exemple: Paracétamol générique)</p>
          <p><strong>Impact sur le remboursement:</strong></p>
          <ul>
            <li>Si un générique existe, le remboursement CNSS se fait sur le prix du générique, même si vous achetez le princeps</li>
            <li>Cela signifie que si vous choisissez le princeps plus cher, vous payerez la différence de votre poche</li>
            <li>Le générique est toujours remboursé sur son propre prix</li>
          </ul>
          <p><strong>Exemple:</strong></p>
          <ul>
            <li>Doliprane (princeps) = 20 MAD</li>
            <li>Paracétamol (générique) = 12 MAD</li>
            <li>CNSS rembourse: 70% de 12 MAD = 8.40 MAD</li>
            <li>Si vous achetez Doliprane, vous payez: 20 - 8.40 = 11.60 MAD</li>
          </ul>`
        },
        {
          question: "7. Qu'est-ce que le tiers payant médicament?",
          answer: `<p>Le tiers payant est un système où vous ne payez <strong>QUE votre part (30%)</strong> à la pharmacie, la CNSS paye directement les 70% au pharmacien.</p>
          <p><strong>Concerne uniquement:</strong></p>
          <ul>
            <li>Les médicaments coûteux définis par convention</li>
            <li>Les pharmacies conventionnées avec la CNSS</li>
          </ul>
          <p><strong>Documents à présenter:</strong></p>
          <ul>
            <li>Ordonnance exclusive au médicament admis en tiers-payant (datée de moins de 2 mois)</li>
            <li>Attestation de prise en charge délivrée par la CNSS</li>
            <li>Carte d'immatriculation CNSS</li>
            <li>Carte d'Identité Nationale (si +18 ans)</li>
          </ul>
          <p>Le pharmacien dépose ensuite le dossier à la CNSS dans un délai de 3 mois.</p>`
        },
        {
          question: "8. Comment obtenir une prise en charge CNSS pour hospitalisation?",
          answer: `<p>Pour une hospitalisation, l'établissement de soins doit envoyer une demande de prise en charge (formulaire 610.2.31) à la CNSS par:</p>
          <ul>
            <li>Fax: 05 22-41-83-51 / 05 22-41-83-50</li>
            <li>Portail en ligne PEC DAMANE: http://pecdamane.cnss.ma/</li>
          </ul>
          <p><strong>Documents requis:</strong></p>
          <ul>
            <li>Copie CIN du bénéficiaire</li>
            <li>Carte d'immatriculation CNSS</li>
            <li>Note confidentielle du médecin avec indications médicales</li>
            <li>Protocole de chimiothérapie (si applicable)</li>
            <li>Planning des séances d'hémodialyse (si applicable)</li>
          </ul>
          <p><strong>Important:</strong> La prise en charge doit parvenir AVANT le démarrage des soins, sauf urgence (dans ce cas, envoi immédiat dès l'admission).</p>`
        },
        {
          question: "9. Peut-on se faire rembourser des soins à l'étranger?",
          answer: `<p><strong>OUI, dans 2 cas:</strong></p>
          <p><strong>Cas 1: Maladie inopinée pendant un séjour à l'étranger</strong></p>
          <ul>
            <li>Remboursement sur la base du Tarif National de Référence (TNR) marocain</li>
            <li>Pas besoin d'accord préalable</li>
            <li>Fournir factures et justificatifs médicaux au retour</li>
          </ul>
          <p><strong>Cas 2: Soins impossibles au Maroc</strong></p>
          <ul>
            <li>Nécessite un accord préalable de la CNSS</li>
            <li>Dossier à déposer à la Division du Contrôle Médical (Maison de l'Assuré)</li>
            <li>Contrôle médical physique obligatoire avant départ</li>
          </ul>
          <p><strong>Documents:</strong></p>
          <ul>
            <li>Certificat médical homologué par le Ministère de la Santé</li>
            <li>Rapport médical actualisé avec antécédents</li>
            <li>Devis de l'établissement étranger</li>
            <li>Coordonnées bancaires de l'établissement</li>
          </ul>`
        },
        {
          question: "10. Qu'est-ce que l'accord préalable (entente préalable)?",
          answer: `<p>Certains actes nécessitent l'autorisation de la CNSS <strong>AVANT</strong> d'engager les frais:</p>
          <p><strong>Actes concernés:</strong></p>
          <ul>
            <li>Actes en séance multiple (rééducation, kinésithérapie longue durée)</li>
            <li>Appareillage de prothèse et orthèse</li>
            <li>Dispositifs médicaux et implants</li>
            <li>Hospitalisation dépassant 30 jours</li>
            <li>Exploration radiologique</li>
            <li>Implants cochléaires, neurostimulateurs</li>
          </ul>
          <p><strong>Comment demander:</strong> Déposez une feuille de soins dûment remplie avec pièces justificatives à votre agence CNSS.</p>
          <p><strong>Risque:</strong> Sans accord préalable, vous risquez le refus de remboursement.</p>`
        },
        {
          question: "11. Quels sont les médicaments remboursés à 100%?",
          answer: `<p><strong>Remboursement à 100% pour:</strong></p>
          <ul>
            <li>Tous les médicaments liés à une ALD/ALC déclarée (si vous avez l'exonération du ticket modérateur)</li>
            <li>10 Affections Lourdes et Coûteuses (ALC) - toujours 100%</li>
            <li>Médicaments dans le secteur public pour certaines ALD (90-100%)</li>
            <li>Médicaments d'oncologie en centres privés conventionnés (sur liste spécifique)</li>
          </ul>
          <p><strong>Exemples de maladies avec remboursement 100%:</strong></p>
          <ul>
            <li>Cancers (chimiothérapie, radiothérapie)</li>
            <li>Insuffisance rénale chronique (dialyse)</li>
            <li>Transplantation d'organes</li>
            <li>Hémophilie</li>
            <li>Mucoviscidose</li>
            <li>Certaines formes de diabète compliqué</li>
          </ul>`
        },
        {
          question: "12. Comment vérifier si mon médicament est remboursé?",
          answer: `<p><strong>4 moyens:</strong></p>
          <ul>
            <li><strong>Demandez à votre pharmacien</strong> - ils ont accès à la liste officielle</li>
            <li><strong>Vérifiez sur le site de l'ANAM</strong> - liste complète des médicaments remboursables</li>
            <li><strong>Appelez la CNSS</strong> - centre d'appel pour informations</li>
            <li><strong>Utilisez notre calculateur sur TAAWIDATY</strong> - entrez le nom du médicament, obtenez le taux instantanément</li>
          </ul>
          <p>Sur l'ordonnance: Les médicaments remboursables sont généralement indiqués par votre médecin avec la mention de leur taux.</p>`
        },
        {
          question: "13. Que faire si mon médicament n'est pas remboursé?",
          answer: `<p><strong>Options:</strong></p>
          <ul>
            <li><strong>Demandez un générique</strong> - souvent remboursé même si le princeps ne l'est pas</li>
            <li><strong>Vérifiez les alternatives</strong> - votre médecin peut prescrire un équivalent remboursable</li>
            <li><strong>Mutuelle complémentaire</strong> - peut couvrir les médicaments non pris en charge par l'AMO</li>
            <li><strong>Appel ou réclamation</strong> - contactez la CNSS pour clarification si vous pensez qu'il y a erreur</li>
          </ul>
          <p><strong>Médicaments JAMAIS remboursés:</strong></p>
          <ul>
            <li>Produits de parapharmacie</li>
            <li>Compléments alimentaires</li>
            <li>Homéopathie</li>
            <li>Médecine douce</li>
            <li>Produits cosmétiques</li>
          </ul>`
        },
        {
          question: "14. Qu'est-ce que le ticket modérateur?",
          answer: `<p>Le ticket modérateur = <strong>la part des frais qui reste à votre charge</strong> après remboursement CNSS.</p>
          <p><strong>Calcul standard:</strong></p>
          <ul>
            <li>CNSS rembourse: 70%</li>
            <li>Vous payez (ticket modérateur): 30%</li>
          </ul>
          <p><strong>Exonération du ticket modérateur:</strong> Certaines pathologies graves (ALD/ALC) donnent droit à une exonération partielle ou totale, réduisant votre part à 0-23%.</p>
          <p><strong>Exemple:</strong></p>
          <ul>
            <li>Médicament = 100 MAD</li>
            <li>Remboursement CNSS 70% = 70 MAD</li>
            <li>Ticket modérateur (votre part) = 30 MAD</li>
            <li>Si vous avez une mutuelle complémentaire, elle peut couvrir ces 30 MAD</li>
          </ul>`
        },
        {
          question: "15. Combien de temps garder mes justificatifs médicaux?",
          answer: `<p><strong>Conservation recommandée: 5 ans minimum</strong></p>
          <p><strong>Documents à conserver:</strong></p>
          <ul>
            <li>Toutes les ordonnances</li>
            <li>Factures de pharmacie</li>
            <li>Feuilles de soins</li>
            <li>Attestations de remboursement CNSS</li>
            <li>Récépissés de dépôt de dossiers</li>
          </ul>
          <p><strong>Pourquoi?</strong></p>
          <ul>
            <li>Contrôles médicaux possibles</li>
            <li>Réclamations éventuelles</li>
            <li>Suivi de vos dépenses de santé</li>
            <li>Déclarations fiscales (certains frais déductibles)</li>
          </ul>
          <p><strong>Astuce:</strong> Scannez et gardez des copies numériques pour éviter la perte de documents papier.</p>`
        }
      ]
    },
    cnops: {
      title: "FAQ CNOPS - Remboursement Médicaments Maroc",
      subtitle: "15 questions essentielles sur le remboursement CNOPS des médicaments au Maroc",
      questions: [
        {
          question: "1. Quel est le taux de remboursement CNOPS pour les médicaments?",
          answer: `<p>La CNOPS rembourse selon deux taux:</p>
          <p><strong>Médicaments ambulatoires standards:</strong></p>
          <ul>
            <li>70% du Prix Public de Vente (PPV) sur la base du prix du générique s'il existe</li>
            <li>+16-20% supplémentaire par votre mutuelle complémentaire (MGPAP, MGEN, etc.)</li>
            <li><strong>Total = 86-90% de couverture</strong></li>
          </ul>
          <p><strong>Médicaments ALD/ALC (Affections Longue Durée):</strong></p>
          <ul>
            <li>100% du PPV (sur base du générique) si vous avez obtenu l'Exonération du Ticket Modérateur (ETM)</li>
            <li>Aucun frais à votre charge dans ce cas</li>
          </ul>
          <p><strong>Règle importante:</strong> Le remboursement se fait toujours sur le prix du médicament générique quand il existe (Article 8 du décret 2-05-733).</p>`
        },
        {
          question: "2. Quelle est la différence entre CNOPS et la Mutuelle (MGPAP)?",
          answer: `<p><strong>CNOPS = Assurance Maladie Obligatoire de base (AMO)</strong></p>
          <ul>
            <li>Rembourse 70-100% selon le type de soins</li>
            <li>Cotisation: 5% du salaire (2.5% employeur + 2.5% employé)</li>
            <li>Obligatoire pour tous les fonctionnaires</li>
          </ul>
          <p><strong>Mutuelle (MGPAP, MGEN, OMFAM, etc.) = Assurance complémentaire</strong></p>
          <ul>
            <li>Rembourse le "ticket modérateur" (ce que la CNOPS ne couvre pas)</li>
            <li>Cotisation: ~1.8% du salaire de base (plafond 50 MAD/mois)</li>
            <li>Complète la CNOPS à hauteur de 16-20% supplémentaires</li>
          </ul>
          <p><strong>Fonctionnement combiné:</strong></p>
          <ul>
            <li>Vous déposez votre dossier à votre mutuelle (pas directement à la CNOPS)</li>
            <li>La mutuelle transmet à la CNOPS</li>
            <li>Vous recevez un remboursement combiné (CNOPS + Mutuelle)</li>
          </ul>`
        },
        {
          question: "3. Comment se faire rembourser par la CNOPS?",
          answer: `<p><strong>IMPORTANT:</strong> Les dossiers se déposent auprès de VOTRE MUTUELLE, pas directement à la CNOPS.</p>
          <p><strong>Documents requis:</strong></p>
          <ul>
            <li>Feuille de soins maladie (identité assuré + bénéficiaire, signatures)</li>
            <li>Ordonnance originale signée et cachetée par:
              <ul>
                <li>Le médecin traitant (avec INPE - Identifiant National du Praticien)</li>
                <li>Le pharmacien</li>
              </ul>
            </li>
            <li>Codes à barres des médicaments (si absent, joindre la boîte complète)</li>
            <li>Durée de traitement et posologie indiquées sur l'ordonnance</li>
          </ul>
          <p><strong>Exception:</strong> Pour médicaments >20,000 MAD, fournir facture légale avec code des impôts du prestataire et mode de paiement.</p>`
        },
        {
          question: "4. Quel est le délai de remboursement CNOPS?",
          answer: `<p><strong>Délai moyen constaté: 54 jours</strong> (données 2023)</p>
          <p><strong>Délais à respecter:</strong></p>
          <ul>
            <li>Vous avez <strong>60 jours</strong> après la date des soins pour déposer votre dossier (délai de forclusion)</li>
            <li>Passé ce délai, votre demande peut être rejetée</li>
          </ul>
          <p><strong>Suivi de dossier:</strong></p>
          <ul>
            <li>Connectez-vous à l'Espace Assuré CNOPS en ligne</li>
            <li>Suivez l'état d'avancement de votre remboursement</li>
            <li>La mutuelle complémentaire a son propre système de suivi</li>
          </ul>
          <p><strong>Important:</strong> Il n'y a pas de délai maximal garanti, mais des améliorations continues sont apportées.</p>`
        },
        {
          question: "5. Qu'est-ce qu'une ALD CNOPS et comment obtenir l'ETM?",
          answer: `<p><strong>ALD (Affection de Longue Durée)</strong> = maladie chronique nécessitant des traitements prolongés.</p>
          <p><strong>ETM (Exonération du Ticket Modérateur)</strong> = accord vous permettant d'être remboursé à 100% des médicaments liés à votre ALD.</p>
          <p><strong>Principales ALD couvertes:</strong></p>
          <ul>
            <li>Diabète (types 1 et 2)</li>
            <li>Hypertension artérielle</li>
            <li>Cancers et tumeurs malignes</li>
            <li>Maladies cardiovasculaires</li>
            <li>Insuffisance rénale chronique</li>
            <li>Maladies neurologiques (Parkinson, épilepsie, sclérose en plaques)</li>
            <li>Maladies psychiatriques graves</li>
            <li>VIH/SIDA</li>
            <li>Hépatites B et C chroniques</li>
          </ul>
          <p><strong>Comment obtenir l'ETM:</strong></p>
          <ol>
            <li>Constituez un dossier avec:
              <ul>
                <li>Rapport médical original détaillé du spécialiste</li>
                <li>Bilans d'examens biologiques/radiologiques confirmant le diagnostic</li>
                <li>Prescription du traitement préconisé</li>
                <li>Copie carte d'immatriculation CNOPS</li>
                <li>Formulaire de demande d'ETM</li>
              </ul>
            </li>
            <li>Déposez à la CNOPS (Département Contrôle Médical ou délégations régionales)</li>
            <li>Attendez l'accord - certaines ETM sont automatiquement renouvelables</li>
            <li>Joignez l'ETM à tous vos dossiers maladies ALD pour bénéficier des 100%</li>
          </ol>`
        },
        {
          question: "6. Quels médicaments sont remboursés par la CNOPS?",
          answer: `<p>La CNOPS rembourse les mêmes médicaments que la CNSS, basés sur la liste officielle de l'ANAM.</p>
          <p><strong>Plus de 9,696 médicaments</strong> sont actuellement remboursables.</p>
          <p><strong>Catégories principales:</strong></p>
          <ul>
            <li>Médicaments ambulatoires courants (antibiotiques, anti-inflammatoires, etc.)</li>
            <li>Médicaments pour maladies chroniques (diabète, hypertension, cholestérol)</li>
            <li>Médicaments d'oncologie (chimiothérapie, hormonothérapie)</li>
            <li>Médicaments psychotropes</li>
            <li>Médicaments pour maladies rares</li>
          </ul>
          <p><strong>Consultation de la liste:</strong></p>
          <ul>
            <li>Site CNOPS - section "Médicaments remboursables"</li>
            <li>Demandez à votre pharmacien</li>
            <li>Utilisez TAAWIDATY - vérification instantanée + calcul du remboursement</li>
          </ul>`
        },
        {
          question: "7. Qu'est-ce que le tiers payant CNOPS médicament?",
          answer: `<p>Le tiers payant permet de ne payer <strong>aucun frais (ou très peu)</strong> à la pharmacie pour vos médicaments ALD.</p>
          <p><strong>Conditions:</strong></p>
          <ul>
            <li>Vous devez avoir une Exonération du Ticket Modérateur (ETM) pour une ALD</li>
            <li>Le médicament doit être destiné à votre ALD déclarée</li>
            <li>Le pharmacien doit être conventionné en tiers payant avec la CNOPS</li>
          </ul>
          <p><strong>Procédure:</strong></p>
          <ol>
            <li>Présentez votre accord ETM au pharmacien</li>
            <li>Le pharmacien constitue le dossier de prise en charge</li>
            <li>Envoie à la CNOPS (Contrôle Médical ou délégations régionales)</li>
            <li>Une fois l'accord obtenu, vous récupérez vos médicaments sans payer</li>
          </ol>
          <p><strong>Liste des médicaments en tiers payant:</strong> Consultez le site CNOPS - section "Médicaments pris en charge en officine"</p>
          <p><strong>Liste des pharmacies conventionnées:</strong> Disponible sur le portail CNOPS</p>`
        },
        {
          question: "8. Médicaments d'oncologie: quelle prise en charge?",
          answer: `<p>Les patients atteints de cancer bénéficient d'une prise en charge spéciale:</p>
          <p><strong>Taux de couverture:</strong> <strong>100% du Prix hôpital</strong> pour les médicaments d'oncologie servis par centres privés d'oncologie conventionnés.</p>
          <p><strong>Liste spéciale:</strong> Médicaments d'oncologie mise à jour périodiquement par la CNOPS.</p>
          <p><strong>Procédure simplifiée:</strong> La CNOPS a simplifié les démarches pour les médicaments coûteux liés au cancer.</p>
          <p>Si pas de prise en charge préalable, dossier de remboursement avec:</p>
          <ul>
            <li>Facture originale datée, cachetée par le centre d'oncologie (mention "facture acquittée")</li>
            <li>Prescription médicale détaillée</li>
            <li>Rapport médical avec protocole thérapeutique</li>
            <li>Copie des examens paracliniques justifiant la prescription</li>
            <li>Codes à barres des médicaments (ou boîte complète si absent)</li>
          </ul>`
        },
        {
          question: "9. Comment fonctionne le remboursement des consultations CNOPS?",
          answer: `<p><strong>Consultations chez médecin généraliste ou spécialiste:</strong></p>
          <ul>
            <li>Taux CNOPS: 80% du Tarif National de Référence (TNR)</li>
            <li>Mutuelle: +20% supplémentaire</li>
            <li><strong>Total = 100% de couverture</strong> si vous consultez un médecin conventionné</li>
          </ul>
          <p><strong>Visites à domicile:</strong> Même taux (80% CNOPS + 20% mutuelle)</p>
          <p><strong>Important:</strong> Si vous bénéficiez d'un autre acte médical pendant la consultation (ex: échographie), seuls les honoraires de l'acte le plus cher seront remboursés (Article 9 NGAP).</p>
          <p><strong>Documents requis:</strong></p>
          <ul>
            <li>Feuille de soins avec prescription médicale</li>
            <li>Nom du médecin, spécialité, adresse, signature, cachet</li>
            <li>Date examen médical</li>
            <li>Nom bénéficiaire et nature des soins prescrits</li>
          </ul>`
        },
        {
          question: "10. Analyses biologiques: taux de remboursement CNOPS",
          answer: `<p><strong>Analyses en ambulatoire:</strong></p>
          <ul>
            <li>CNOPS: 80% de la TNR</li>
            <li>Mutuelle: +20%</li>
            <li><strong>Total = 100%</strong></li>
          </ul>
          <p><strong>Analyses lors d'une hospitalisation:</strong></p>
          <ul>
            <li>Secteur privé: 90% de la TNR</li>
            <li>Secteur public (CHU, hôpitaux): 100% de la TNR</li>
          </ul>
          <p><strong>Nomenclature:</strong> Seuls les actes figurant dans la Nomenclature générale de biologie médicale (NABM) sont remboursables, ainsi qu'une liste d'actes assimilés.</p>
          <p><strong>Dépôt du dossier:</strong> À votre mutuelle complémentaire, pas directement à la CNOPS.</p>`
        },
        {
          question: "11. Peut-on se faire rembourser des soins à l'étranger par la CNOPS?",
          answer: `<p><strong>OUI, dans des cas exceptionnels:</strong></p>
          <p><strong>Cas 1: Maladie inopinée à l'étranger</strong></p>
          <ul>
            <li>Remboursement sur la base du TNR marocain</li>
            <li>Mêmes taux et conditions que si soins au Maroc</li>
            <li>Pas besoin d'accord préalable</li>
          </ul>
          <p><strong>Cas 2: Soins impossibles au Maroc (transfert programmé)</strong></p>
          <ul>
            <li>Nécessite accord préalable du contrôle médical CNOPS</li>
            <li>Priorité aux établissements étrangers conventionnés avec la CNOPS</li>
          </ul>
          <p><strong>Documents requis:</strong></p>
          <ul>
            <li>Certificat médical homologué par le Ministère de la Santé</li>
            <li>Rapport médical avec antécédents et nature pathologie</li>
            <li>Devis de l'établissement étranger</li>
            <li>Coordonnées bancaires de l'établissement</li>
          </ul>
          <p><strong>Bonus:</strong> La mutuelle MGPAP peut participer à hauteur de 50% du prix du billet d'avion (jusqu'à 3 fois si nécessaire).</p>`
        },
        {
          question: "12. Quels sont les soins dentaires remboursés CNOPS?",
          answer: `<p><strong>Soins remboursables:</strong></p>
          <ul>
            <li>Consultations dentaires: 80% TNR</li>
            <li>Soins conservateurs (caries, détartrage): 80% TNR</li>
            <li>Chirurgie bucco-dentaire: 80% TNR</li>
            <li>Prothèses dentaires: 80% TNR avec plafond</li>
            <li>Orthodontie dentofaciale (ODF): uniquement pour enfants <16 ans</li>
          </ul>
          <p><strong>Plafond prothèses dentaires:</strong> Variable selon la TNR, consultez le tarif sur le portail CNOPS.</p>
          <p><strong>Documents requis:</strong></p>
          <ul>
            <li>Feuille de soins dentaires</li>
            <li>Schéma dentaire</li>
            <li>Actes réalisés détaillés</li>
            <li>INPE du praticien</li>
            <li>Cachet et signature du dentiste</li>
          </ul>
          <p><strong>Dépôt:</strong> À votre mutuelle dans les 60 jours suivant les soins.</p>`
        },
        {
          question: "13. Hospitalisation CNOPS: quelle couverture?",
          answer: `<p><strong>Hospitalisation en secteur privé (cliniques):</strong></p>
          <ul>
            <li>Soins médicaux: 90% de la TNR</li>
            <li>Analyses biologiques: 90% de la TNR</li>
            <li>Actes chirurgicaux: 90% de la TNR</li>
            <li>Médicaments: 90%</li>
          </ul>
          <p><strong>Hospitalisation en secteur public (CHU, hôpitaux):</strong></p>
          <ul>
            <li><strong>100% de la TNR</strong> pour tous les soins</li>
          </ul>
          <p><strong>Petites chirurgies externes (cabinets, cliniques sans hospitalisation):</strong></p>
          <ul>
            <li>80% de la TNR</li>
          </ul>
          <p><strong>Dossier de remboursement hospitalisation (à déposer sous 60 jours):</strong></p>
          <ul>
            <li>Facture ou compte rendu d'hospitalisation</li>
            <li>Prescription médicale si paiement médicaments pendant hospitalisation</li>
            <li>Clichés radiologiques pré/post-opératoires (chirurgie orthopédique)</li>
            <li>Facture du sang et dérivés</li>
            <li>Facture des dispositifs médicaux</li>
            <li>Reçu de paiement (secteur public)</li>
          </ul>`
        },
        {
          question: "14. Dispositifs médicaux et lunetterie: remboursement CNOPS",
          answer: `<p><strong>Dispositifs médicaux:</strong> Remboursement sous forme de forfaits fixés par la réglementation.</p>
          <p><strong>Exemples:</strong></p>
          <ul>
            <li>Prothèses internes (implants oculaires, valves cardiaques)</li>
            <li>Orthèses et prothèses (prothèse de sein, appareils auditifs)</li>
            <li>Dispositifs de traitement (masques à oxygène)</li>
          </ul>
          <p><strong>Lunetterie médicale:</strong></p>
          <ul>
            <li>Remboursement forfaitaire</li>
            <li>Mutuelle complémente à hauteur de 20%</li>
            <li>Plafonds annuels applicables</li>
          </ul>
          <p><strong>Orthodontie enfants (<16 ans):</strong></p>
          <ul>
            <li>Remboursement forfaitaire selon TNR</li>
          </ul>
          <p><strong>Important:</strong> La plupart de ces prestations nécessitent une entente préalable de la CNOPS avant d'engager les frais.</p>`
        },
        {
          question: "15. Comment suivre mon remboursement CNOPS en ligne?",
          answer: `<p><strong>Espace Assuré CNOPS:</strong></p>
          <ul>
            <li>Connectez-vous sur le portail CNOPS</li>
            <li>Créez votre compte avec numéro d'immatriculation</li>
            <li>Suivez l'état d'avancement de vos dossiers</li>
            <li>Consultez vos remboursements passés</li>
            <li>Téléchargez vos relevés</li>
          </ul>
          <p><strong>Services en ligne disponibles:</strong></p>
          <ul>
            <li>Consultation historique des remboursements</li>
            <li>Suivi de dossiers en cours</li>
            <li>Téléchargement de formulaires</li>
            <li>Vérification de vos droits ouverts</li>
            <li>Consultation des TNR (tarifs nationaux de référence)</li>
          </ul>
          <p><strong>Attention:</strong> L'Espace Assuré CNOPS ne concerne que la part AMO de base. Pour le suivi de votre mutuelle complémentaire, connectez-vous au portail de votre mutuelle (MGPAP, MGEN, OMFAM, etc.).</p>
          <p><strong>Contact CNOPS:</strong></p>
          <ul>
            <li>Site web: www.cnops.org.ma</li>
            <li>Centres d'appel</li>
            <li>Agences régionales</li>
          </ul>`
        }
      ]
    },
    cta: {
      title: "Calculez votre remboursement maintenant",
      subtitle: "Utilisez notre calculateur gratuit pour savoir exactement combien vous serez remboursé",
      button: "Accéder au Calculateur"
    }
  },
  ar: {
    cnss: {
      title: "أسئلة متكررة CNSS - استرجاع مصاريف الأدوية بالمغرب",
      subtitle: "15 سؤالاً أساسياً حول استرجاع مصاريف الأدوية لدى CNSS",
      questions: []
    },
    cnops: {
      title: "أسئلة متكررة CNOPS - استرجاع مصاريف الأدوية",
      subtitle: "15 سؤالاً أساسياً حول استرجاع مصاريف الأدوية لدى CNOPS",
      questions: []
    },
    cta: {
      title: "احسب تعويضك الآن",
      subtitle: "استخدم حاسبتنا المجانية لمعرفة المبلغ الذي ستسترده بالضبط",
      button: "الوصول إلى الحاسبة"
    }
  }
};
