# Questionnaire 

### Objectif des tests unitaires
Quel est l'objectif principal des tests unitaires ?
   - A) Tester l'intégration entre plusieurs composants
   - B) Vérifier le comportement d'une unité de code isolée
   - C) Valider l'expérience utilisateur
   - D) Tester les performances du système

Réponse B

### Utilisation de Gherkin
Gherkin est principalement utilisé pour :
   - A) Écrire des tests unitaires
   - B) Décrire le comportement attendu dans un format compréhensible par tous
   - C) Documenter le code source
   - D) Analyser les performances des tests

   Réponse B


### Principe d'isolation
Expliquez en quoi consiste le principe d'isolation dans les tests unitaires et pourquoi il est important.

Le principe d'isolations dans les tests unitaires consiste à tester des parties de code isolé (des fonctionnalités par exemple), qui ne dépendent pas d'autres composants de l'applications. On va donc tester une seule chose dans l'application et ça permet d'identifier les problèmes de la fonctionnalités testé.

### Origine du BDD
Le BDD est une extension du :
   - A) Waterfall
   - B) Test Driven Development
   - C) Extreme Programming
   - D) Scrum

   Réponse B


### Fonction des tests d'intégration
Les tests d'intégration vérifient principalement :
   - A) Le fonctionnement isolé de chaque composant
   - B) L'interaction entre différents composants ou modules
   - C) L'expérience utilisateur globale
   - D) La vitesse d'exécution du code

   Réponse B


### Structure Gherkin
Expliquez la structure d'un scénario Gherkin et donnez un exemple concret.

Un scénarion Gherkin suit la structure : 
FEATURE : Titre du scénario
GIVEN : Précondition ou contexte initial
WHEN : Event ou trigger
THEN : Output expecter
And, BUT

Exemple concret : 
Feature : User Authentication Background
Scenario : 
    Given : The user is already registered to the website Scenario: 
    Given : The user is on the login page
    When : The user input the correct email address
    And : The user input the correct password
    And : The user click on the login button
    Then : The user should be authenticated 
    And : The user should be redirected to their dashboard 
    And : The user should be presented with a success message


### Mocks en tests unitaires
Dans le contexte des tests unitaires, que sont les "mocks" ?
   - A) Des erreurs volontairement introduites pour vérifier la robustesse du code
   - B) Des objets qui simulent le comportement de dépendances réelles
   - C) Des tests qui échouent intentionnellement
   - D) Des interfaces utilisateur simulées

      Réponse B

### Objectif des tests end-to-end
Les tests end-to-end visent à :
   - A) Vérifier le fonctionnement d'un composant isolé
   - B) Tester l'application de bout en bout du point de vue de l'utilisateur
   - C) Mesurer uniquement les performances de l'application
   - D) Remplacer tous les autres types de tests

      Réponse B


### Cycle TDD
Expliquez en détail le cycle Red-Green-Refactor du TDD et ce qui se passe à chaque étape.

Red - Green - Refactor

On commence par faire des tests red (des tests qui vont fail), puis on écrit le code minimum pour faire passer le test (green), et enfin on améliore le code tout en s'assurant que les tests passent (refacor). 


### Caractéristiques d'un bon test unitaire
Quelle est la caractéristique idéale d'un bon test unitaire ?
    - A) Il doit être complexe pour couvrir tous les cas
    - B) Il doit être rapide à exécuter, isolé et répétable
    - C) Il doit tester plusieurs fonctionnalités à la fois
    - D) Il doit nécessiter une configuration manuelle avant chaque exécution

       Réponse B

### Mots-clés de Gherkin
Quels sont les mots-clés principaux de Gherkin ?
    - A) Test, Code, Validate
    - B) Setup, Execute, Verify, Teardown
    - C) Feature, Scenario, Given, When, Then
    - D) Describe, It, Expect, Assert

       Réponse C

### Tests unitaires vs tests d'intégration
Quelles sont les principales différences entre les tests unitaires et les tests d'intégration ?
Les tests unitaires vont vérifier des parties de code isolées, les tests d'intégration vérifient des parties de code qui intéragissent entre elles. 

### Nom du cycle TDD
Le cycle TDD classique est connu sous le nom de :
    - A) Plan-Do-Check-Act
    - B) Red-Green-Refactor
    - C) Build-Measure-Learn
    - D) Test-Code-Deploy

       Réponse B

### Focus des tests fonctionnels
Les tests fonctionnels se concentrent sur :
    - A) Le code source interne
    - B) Les interactions entre composants
    - C) Le comportement du système par rapport aux spécifications
    - D) La performance du système sous charge

       Réponse C

### BDD et communication d'équipe
Comment le BDD peut-il améliorer la communication entre les équipes techniques et les équipes métier ?
Il utilise un langage commun comme Gherkin qui permet d'aligner les équipes techniques et métier sur les attentes.

### Avantage principal du TDD
Quel est l'avantage principal du TDD ?
    - A) Il réduit le temps de développement global
    - B) Il garantit l'absence totale de bugs
    - C) Il favorise un design modulaire et des interfaces claires
    - D) Il élimine le besoin de documentation

       Réponse C

### Avantages et défis des tests end-to-end
Quels sont les avantages et les défis spécifiques liés aux tests end-to-end par rapport aux autres types de tests ?
On va faire du TDD la ou on a généralement du traitement de données, des données sensibles etc... Ce n’est pas obliger dans faire pour tout. Ca prends beaucoup de temps à faire et souvent double le temps de développement et de budget, les petites entreprises n’en n’ont pas besoins.

Ils simulent le parcours utilisateur complet, mais ils osnt lents, coûteux et difficile à maintenir.

Exemple :

Ca permet donc d'avoir une meilleur structure avec de plus de sécurité mais c'est déconseiller pour des entreprises qui par exemple vendent un produit qui a de la concurrence car le pris de développement sera plus élévé et le produit à la vente aussi ce qui n'est pas bénéfique. 

### Format des scénarios BDD
Quel est le format typique d'un scénario BDD ?
    - A) Si-Alors
    - B) Étant donné-Quand-Alors
    - C) Qui-Quoi-Où-Quand
    - D) Pour-Pendant-Après

           Réponse B

### Avantages et limites des tests unitaires
Décrivez les avantages et les limites des tests unitaires dans un projet de développement logiciel.

Ils sont rapides à faire, test des parties de code isolés, détectent les bugs en avance, facilite le refactoring, mais ne testent pas les intéraction entre composant

### Fonctionnalité de réutilisation dans Gherkin
Quelle est la fonctionnalité de Gherkin qui permet de réutiliser des étapes communes à plusieurs scénarios ?
    - A) Hooks
    - B) Background
    - C) Scenario Outline
    - D) Tags

       Réponse B

### Responsabilité des tests fonctionnels
Qui est généralement responsable de l'écriture et de l'exécution des tests fonctionnels ?
    - A) Les développeurs uniquement
    - B) Les testeurs QA uniquement
    - C) Les développeurs et les testeurs QA
    - D) Les utilisateurs finaux

           Réponse C

### Moment d'écriture du code en TDD
Dans le TDD, à quel moment écrit-on le code de production ?
    - A) Avant d'écrire les tests
    - B) Après avoir écrit les tests mais avant de les exécuter
    - C) Après avoir exécuté les tests et constaté leur échec
    - D) Après que tous les tests aient réussi

           Réponse C

### Outils pour tests end-to-end
Quel outil est couramment utilisé pour les tests end-to-end d'applications web ?
    - A) JUnit
    - B) Mockito
    - C) Playwright
    - D) NUnit

           Réponse B

### Différences entre BDD et TDD
En quoi le BDD diffère-t-il du TDD en termes d'approche et d'objectifs ?

Le TDD travail sur le code et les tests unitaires, le BDD sur le comportement attendu entre la collaboration des équipes

### Défis des tests d'intégration
Quels défis sont fréquemment rencontrés lors de la mise en place de tests d'intégration ?
    - A) La difficulté à isoler les composants
    - B) La lenteur d'exécution des tests
    - C) La difficulté à simuler certaines dépendances
    - D) Toutes les réponses ci-dessus

           Réponse D

### Caractéristiques d'un bon test end-to-end
Quelle est la caractéristique d'un bon test end-to-end ?
    - A) Il doit tester toutes les fonctionnalités en une seule fois
    - B) Il doit simuler avec précision le comportement réel des utilisateurs
    - C) Il doit être exécuté uniquement en production
    - D) Il doit être modifié fréquemment

           Réponse B

### Défis de l'adoption du TDD
Quels sont les défis couramment rencontrés lors de l'adoption du TDD dans une équipe, et comment pourriez-vous les surmonter ?

Souvent les équipes ne souhaitent pas changer leur méthode, ils n'ont pas envient d'apprendre une nouvelle méthode

En solution on peut avoir une formation dessus qui explique bien ce que ça apporterai d'employer cette méthode, une adoption progressive de la méthode.

### Frameworks de tests unitaires
Lequel de ces frameworks n'est PAS utilisé pour les tests unitaires ?
    - A) JUnit
    - B) NUnit
    - C) Selenium
    - D) Vitest

    Réponse C


### Rôles dans le processus BDD
Quels rôles sont généralement impliqués dans le processus BDD ?
    - A) Uniquement les développeurs
    - B) Développeurs et testeurs
    - C) Développeurs, testeurs et product owners
    - D) Développeurs, testeurs, product owners et parties prenantes métier
    
    Réponse D

### Maintenance des tests end-to-end
Comment géreriez-vous la maintenance des tests end-to-end pour une application qui évolue rapidement ?

Il faudrait automatiser les tests, prioriser les scénarios critiques, utiliser des données dynamiques.

### Inconvénients des tests fonctionnels
Quel est le principal inconvénient des tests fonctionnels ?
    - A) Ils sont trop simples pour détecter des bugs complexes
    - B) Ils sont généralement lents et coûteux à exécuter
    - C) Ils ne peuvent pas être automatisés
    - D) Ils nécessitent peu de connaissances du domaine

        Réponse B

### Intégration de Gherkin en agile
Comment intégreriez-vous Gherkin dans un processus de développement agile ? Quels seraient les avantages ?

J'écriverais les scénarios en avance et les définirais dans les critères d'acceptation des user stories, ca permet d'avoir une meilleure collaboration et compréhension des besoins.  

### Principes du TDD
Lequel des principes suivants n'est PAS associé au TDD ?
    - A) Écrire le test minimum qui échoue
    - B) Écrire le code minimum qui fait passer le test
    - C) Refactoriser le code après chaque test réussi
    - D) Écrire tous les tests à la fin du développement

        Réponse D

### Différences entre tests fonctionnels et autres tests
En quoi les tests fonctionnels diffèrent-ils des tests unitaires et d'intégration en termes d'approche et d'objectifs ?

Les tests fonctionnels valident que les parties de code tester fonctionne par rapport au spécification. Par exemple on va tester nos utilisateurs, une fonctionnalités dans notre UI. 

### Approche combinant TDD, BDD et Gherkin
Quelle approche combine naturellement TDD, BDD et Gherkin ?
    - A) Extreme Programming
    - B) Specification By Example
    - C) Scrum
    - D) Kanban

    Réponse B

### Organisation des tests fonctionnels
Décrivez comment vous organiseriez les tests fonctionnels pour une application web de e-commerce.
Je prioriserais les scénarios critiques, en les automatisant si possible.

### Pyramide de tests
Quelle est la pyramide de tests classique, du bas vers le haut ?
    - A) Tests E2E, Tests fonctionnels, Tests d'intégration, Tests unitaires
    - B) Tests unitaires, Tests d'intégration, Tests fonctionnels, Tests E2E
    - C) Tests fonctionnels, Tests unitaires, Tests d'intégration, Tests E2E
    - D) Tests unitaires, Tests fonctionnels, Tests d'intégration, Tests E2E

    Réponse B

### Stratégie de test optimale
Comment détermineriez-vous la stratégie de test optimale pour un projet, en considérant les différents types de tests abordés dans ce questionnaire ?

D'abord on analyse les besoins et risques du projet, il faudrait si possible appliquer la même stratégie que dans la pyramide de test, et si on est en agile, on vérifie la stratégie après chaque sprint.

### Quelle est l'erreur récurente qui peut être faite lors de test end 2 end ? (Je l'ai répété pas mal de fois)

La dépendance au sélecteur fragile et tester sur des parties de code qui ne sont pas critiques ou prioritaires. 