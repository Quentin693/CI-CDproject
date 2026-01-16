# 🚀 Guide de Déploiement CI/CD - Stayava Hotel

## 📋 Prérequis

- ✅ Compte GitHub avec accès au repository
- ✅ VM Google Cloud Platform configurée
- ✅ Clé SSH ajoutée à la VM GCP
- ✅ Node.js 18+ installé localement

## 🌿 GitFlow - Structure des Branches

### Branches principales
- `main` : Production (code stable)
- `develop` : Intégration (développements en cours)

### Branches de travail
- `feature/*` : Nouvelles fonctionnalités
- `release/*` : Préparation d'une release
- `hotfix/*` : Corrections urgentes en production

## 🔧 Configuration Initiale

### 1. Initialiser Git et GitFlow

```bash
cd /Users/quentinho/Projets/EEMI/CI-CDproject

# Initialiser git
git init

# Créer la branche principale
git add .
git commit -m "Initial commit: Next.js hotel booking application"

# Créer la branche develop
git branch develop
git checkout develop
```

### 2. Configurer le repository GitHub

```bash
# Créer un nouveau repository sur GitHub puis :
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
git push -u origin main
git push -u origin develop
```

### 3. Configurer les Secrets GitHub

Allez dans `Settings` > `Secrets and variables` > `Actions` et ajoutez :

**Secrets requis :**
- `GCP_SSH_PRIVATE_KEY` : Votre clé privée SSH (contenu du fichier `~/.ssh/id_rsa`)
- `GCP_HOST` : L'adresse IP de votre VM GCP
- `GCP_USERNAME` : Votre nom d'utilisateur SSH (ex: `quentin`)

### 4. Configurer les fichiers Ansible Inventory

Éditez les fichiers d'inventaire :

**ansible/inventory/develop.ini :**
```ini
[development]
gcp-dev ansible_host=VOTRE_IP_GCP ansible_user=VOTRE_USERNAME ansible_ssh_private_key_file=~/.ssh/id_rsa
```

**ansible/inventory/production.ini :**
```ini
[production]
gcp-prod ansible_host=VOTRE_IP_GCP ansible_user=VOTRE_USERNAME ansible_ssh_private_key_file=~/.ssh/id_rsa
```

## 🔄 Workflow de Développement

### Créer une nouvelle fonctionnalité

```bash
# Depuis develop
git checkout develop
git pull origin develop

# Créer une branche feature
git checkout -b feature/nom-de-la-feature

# Développer...
git add .
git commit -m "feat: ajout de la fonctionnalité X"

# Pousser la branche
git push -u origin feature/nom-de-la-feature
```

### Créer une Pull Request

1. Allez sur GitHub
2. Créez une Pull Request de `feature/nom-de-la-feature` vers `develop`
3. La CI s'exécutera automatiquement (lint + build + tests)
4. Après validation, mergez la PR
5. Le CD déploiera automatiquement vers l'environnement de développement

### Déployer en Production

```bash
# Depuis develop (après tests validés)
git checkout main
git merge develop
git push origin main

# Créer un tag de version
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

## 📊 Étapes de la Pipeline CI

1. **Checkout du dépôt** : Récupération du code
2. **Setup Node.js** : Installation de Node.js 18 et 20
3. **Installation des dépendances** : `npm ci`
4. **Lint** : Vérification de la qualité du code
5. **Tests** : Exécution des tests (à ajouter)
6. **Build** : Compilation de l'application Next.js
7. **Upload artifacts** : Sauvegarde du build

## 🚀 Étapes de la Pipeline CD

### Déploiement Automatique

**Sur push vers `develop` :**
- Build de l'application
- Déploiement via Ansible vers l'environnement de développement
- URL : http://VOTRE_IP:3000

**Sur push vers `main` :**
- Build de l'application
- Déploiement via Ansible vers l'environnement de production
- Création d'une release GitHub si un tag est poussé
- URL : http://VOTRE_IP

### Déploiement Manuel

```bash
# Déployer manuellement avec Ansible
cd /Users/quentinho/Projets/EEMI/CI-CDproject

# Vers develop
ansible-playbook -i ansible/inventory/develop.ini ansible/playbook.yml --extra-vars "deploy_env=development"

# Vers production
ansible-playbook -i ansible/inventory/production.ini ansible/playbook.yml --extra-vars "deploy_env=production"
```

## 🔍 Vérification du Déploiement

### Sur la VM GCP

```bash
# Connexion SSH
ssh VOTRE_USERNAME@VOTRE_IP_GCP

# Vérifier PM2
pm2 list
pm2 logs stayava-hotel

# Vérifier Nginx
sudo systemctl status nginx
sudo nginx -t

# Vérifier l'application
curl http://localhost:3000
```

### Depuis le navigateur

```
http://VOTRE_IP_GCP
```

## 📝 Convention de Nommage des Commits

Suivez la convention [Conventional Commits](https://www.conventionalcommits.org/) :

- `feat:` : Nouvelle fonctionnalité
- `fix:` : Correction de bug
- `docs:` : Documentation
- `style:` : Formatage, point-virgules manquants, etc.
- `refactor:` : Refactoring de code
- `test:` : Ajout de tests
- `chore:` : Tâches de maintenance

**Exemples :**
```bash
git commit -m "feat: ajout du système de réservation"
git commit -m "fix: correction de l'affichage des prix"
git commit -m "docs: mise à jour du README"
```

## 🛠️ Commandes Utiles

```bash
# Voir les branches
git branch -a

# Changer de branche
git checkout nom-branche

# Mettre à jour depuis origin
git pull origin nom-branche

# Voir l'historique
git log --oneline --graph --all

# Annuler le dernier commit (garder les modifications)
git reset --soft HEAD~1

# Voir les modifications
git status
git diff
```

## 🆘 Troubleshooting

### La CI échoue au lint
```bash
npm run lint -- --fix
git add .
git commit -m "fix: correction des erreurs de lint"
```

### Problème de connexion SSH
```bash
# Tester la connexion
ssh -i ~/.ssh/id_rsa VOTRE_USERNAME@VOTRE_IP_GCP

# Vérifier les permissions
chmod 600 ~/.ssh/id_rsa
```

### L'application ne démarre pas sur la VM
```bash
# Sur la VM
pm2 logs stayava-hotel --lines 100
pm2 restart stayava-hotel
```

## 📞 Support

Pour toute question, consultez la documentation ou contactez l'équipe.

---

✨ **Bon déploiement !** 🚀

