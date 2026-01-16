# 🚀 Guide de Workflow GitFlow - Étape par Étape

## 📦 Configuration Initiale (À faire maintenant)

### 1. Pousser le code vers GitHub

```bash
cd /Users/quentinho/Projets/EEMI/CI-CDproject

# Ajouter tous les fichiers
git add .
git commit -m "chore: configuration initiale CI/CD avec Ansible et GitHub Actions"

# Pousser les branches main et develop
git checkout main
git push -u origin main

git checkout develop  
git push -u origin develop
```

### 2. Configurer les Secrets GitHub

Allez sur : https://github.com/Quentin693/CI-CDproject/settings/secrets/actions

Ajoutez ces 3 secrets :

#### Secret 1 : `GCP_SSH_PRIVATE_KEY`
```bash
# Copier votre clé privée complète
cat ~/.ssh/id_rsa | pbcopy
```
Puis collez dans GitHub (incluant BEGIN et END)

#### Secret 2 : `GCP_HOST`
```
35.246.11.138
```

#### Secret 3 : `GCP_USERNAME`
```
quentin.cialone-gcp
```

---

## 🔨 Travailler sur une Issue (Exemple avec Issue #1)

### 1. Créer une branche feature depuis develop

```bash
# Assurez-vous d'être sur develop à jour
git checkout develop
git pull origin develop

# Créer une branche pour l'issue #1
git checkout -b feature/navbar

# Ou pour l'issue #2 :
# git checkout -b feature/hero-section
```

### 2. Développer la fonctionnalité

Créez ou modifiez vos fichiers...

### 3. Commit avec référence à l'issue

```bash
# Ajouter les fichiers modifiés
git add .

# Commit avec référence à l'issue
git commit -m "feat: ajout de la navbar #1"

# Ou pour plusieurs fichiers :
git add components/Navbar.tsx
git add components/Header.tsx
git commit -m "feat: implémentation navbar responsive closes #1"
```

**Mots-clés magiques GitHub :**
- `closes #1` ou `fixes #1` : Ferme automatiquement l'issue au merge
- `#1` : Fait juste référence à l'issue

### 4. Pousser la branche

```bash
git push -u origin feature/navbar
```

### 5. Créer une Pull Request

1. Allez sur GitHub
2. Cliquez sur "Compare & pull request"
3. **Base: develop** ← **Compare: feature/navbar**
4. Titre : "feat: Ajout de la navbar (#1)"
5. Description :
```markdown
## 🎯 Objectif
Implémentation de la barre de navigation

## ✅ Changements
- Ajout du composant Navbar
- Logo et menu de navigation
- Responsive mobile

## 🔗 Issue liée
Closes #1
```
6. Créez la PR

### 6. La CI s'exécute automatiquement ✨

GitHub Actions va :
- ✅ Vérifier le lint
- ✅ Builder l'application
- ✅ Afficher les résultats

### 7. Merger la Pull Request

Une fois la CI passée et après revue :
1. Cliquez sur "Merge pull request"
2. Confirmez
3. L'issue #1 se fermera automatiquement
4. Le CD déploiera automatiquement vers l'environnement de dev

---

## 📊 Exemple Complet : Issue #2 "Add Hero Section"

```bash
# 1. Créer la branche
git checkout develop
git pull origin develop
git checkout -b feature/hero-section

# 2. Développer (modifiez HeroSection.tsx)
# ...éditer les fichiers...

# 3. Commit
git add components/HeroSection.tsx
git commit -m "feat: création de la hero section avec background image fixes #2"

# 4. Pousser
git push -u origin feature/hero-section

# 5. Créer la PR sur GitHub
# Base: develop ← Compare: feature/hero-section

# 6. Merger après validation CI
# L'issue #2 se ferme automatiquement
```

---

## 🌿 Structure des Branches

```
main (production)
  ↑
  └── develop (intégration)
       ↑
       ├── feature/navbar (#1)
       ├── feature/hero-section (#2)
       ├── feature/product-overview (#3)
       ├── feature/product-page (#4)
       ├── feature/confidence-section (#5)
       ├── feature/footer (#6)
       └── feature/newsletter (#7)
```

---

## 🎯 Ordre de Travail Recommandé

### Phase 1 : Structure de base
1. ✅ Issue #1 - Navbar
2. ✅ Issue #2 - Hero Section
3. ✅ Issue #6 - Footer

### Phase 2 : Contenu
4. ✅ Issue #3 - Product Overview
5. ✅ Issue #4 - Product Page
6. ✅ Issue #5 - Confidence Section

### Phase 3 : Fonctionnalités
7. ✅ Issue #7 - Newsletter

---

## 🚀 Déploiement vers Production

Une fois que tout fonctionne sur develop :

```bash
# 1. Merger develop dans main
git checkout main
git pull origin main
git merge develop

# 2. Créer un tag de version
git tag -a v1.0.0 -m "Release v1.0.0: Application complète Stayava Hotel"

# 3. Pousser main et le tag
git push origin main
git push origin v1.0.0

# 4. Le CD déploiera automatiquement en production ! 🎉
```

---

## 📝 Convention de Nommage

### Branches
- `feature/nom-feature` : Nouvelle fonctionnalité
- `hotfix/bug-critique` : Correction urgente
- `release/v1.0.0` : Préparation release

### Commits
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage
- `refactor:` Refactoring
- `test:` Tests
- `chore:` Maintenance

### Exemples
```bash
git commit -m "feat: ajout du système de réservation #4"
git commit -m "fix: correction affichage prix sur mobile closes #12"
git commit -m "docs: mise à jour README avec instructions déploiement"
git commit -m "style: formatage du code avec Prettier"
```

---

## 🔍 Vérifications

### Avant de pusher
```bash
# Vérifier les modifications
git status
git diff

# Tester localement
npm run dev
npm run build
npm run lint
```

### Après le merge
1. Vérifier que l'issue est fermée
2. Vérifier que la CI est passée (✅ vert)
3. Tester sur l'environnement de dev : http://35.246.11.138:3000

---

## 🆘 Commandes Utiles

```bash
# Voir toutes les branches
git branch -a

# Supprimer une branche locale
git branch -d feature/navbar

# Annuler les modifications non commitées
git checkout -- .

# Voir l'historique
git log --oneline --graph --all

# Mettre à jour develop depuis main
git checkout develop
git pull origin main

# Stash (mettre de côté temporairement)
git stash
git stash pop
```

---

## ✨ Points Clés

1. **Toujours travailler depuis develop** (jamais directement sur main)
2. **Une branche = une fonctionnalité = une issue**
3. **Toujours référencer l'issue** dans les commits et PR
4. **Tester localement** avant de pusher
5. **La CI doit être verte** avant de merger
6. **Le CD déploie automatiquement** après le merge

---

Bon développement ! 🚀

