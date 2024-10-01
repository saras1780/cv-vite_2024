import "./style.css";

// Charger le fichier JSON
    fetch('cv.json')
      .then(response => response.json())
      .then(data => {
        // Afficher les informations personnelles
        const personalInfo = document.getElementById('personal-info');
        personalInfo.innerHTML = `
                <strong>Nom :</strong> ${data.personal_info.name}<br>
                <strong>Adresse :</strong> ${data.personal_info.address}<br>
                <strong>Téléphone :</strong> ${data.personal_info.phone}<br>
                <strong>Email :</strong> ${data.personal_info.email}<br>
                <strong>Poste :</strong> ${data.personal_info.position}
            `;

        // Afficher les compétences
        const competences = document.getElementById('competences');
        let competencesHTML = '<li><strong>Webdesign :</strong> ' + data.competences.techniques.webdesign.join(', ') + '</li>';
        competencesHTML += '<li><strong>Développement :</strong> ' + data.competences.techniques.development.join(', ') + '</li>';
        competencesHTML += '<li><strong>Graphisme :</strong> ' + data.competences.techniques.graphisme.join(', ') + '</li>';
        competencesHTML += '<li><strong>Langues :</strong> Français (' + data.competences.linguistiques.francais + '), Anglais (' + data.competences.linguistiques.anglais + ')</li>';
        competences.innerHTML = competencesHTML;

        // Afficher l'éducation
        const education = document.getElementById('education');
        let educationHTML = '';
        data.education.forEach(edu => {
          educationHTML += `<li><strong>${edu.institution} (${edu.years}) :</strong> ${edu.degree}</li>`;
        });
        education.innerHTML = educationHTML;

        // Afficher l'expérience professionnelle
        const experience = document.getElementById('experience');
        let experienceHTML = '';
        data.experience_professionnelle.forEach(exp => {
          experienceHTML += `<li><strong>${exp.title} (${exp.years}) :</strong> <ul>`;
          exp.responsibilities.forEach(res => {
            experienceHTML += `<li>${res}</li>`;
          });
          experienceHTML += `</ul></li>`;
        });
        experience.innerHTML = experienceHTML;
      })
      .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));