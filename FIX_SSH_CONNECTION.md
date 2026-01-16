# 🔐 Correction de l'Erreur SSH

## ❌ Erreur

```
Failed to connect to the host via ssh: quentin.cialone-gcp@35.246.11.138
Permission denied (publickey)
```

Cette erreur signifie que GitHub Actions ne peut pas se connecter à votre VM GCP avec la clé SSH fournie.

---

## 🔍 Diagnostic - Commandes à Exécuter

### 1. Tester la connexion SSH depuis votre Mac

```bash
# Tester la connexion (devrait fonctionner)
ssh quentin.cialone-gcp@35.246.11.138 "echo 'Connexion OK'"

# Si ça ne fonctionne pas, essayez avec la clé explicite :
ssh -i ~/.ssh/id_rsa quentin.cialone-gcp@35.246.11.138 "echo 'Connexion OK'"

# Ou avec ed25519 :
ssh -i ~/.ssh/id_ed25519 quentin.cialone-gcp@35.246.11.138 "echo 'Connexion OK'"
```

### 2. Identifier quelle clé fonctionne

```bash
# Voir toutes vos clés SSH
ls -la ~/.ssh/

# Afficher votre clé publique
cat ~/.ssh/id_rsa.pub
# OU
cat ~/.ssh/id_ed25519.pub
```

### 3. Vérifier les clés sur la VM GCP

```bash
# Se connecter à la VM
ssh quentin.cialone-gcp@35.246.11.138

# Une fois connecté, voir les clés autorisées
cat ~/.ssh/authorized_keys

# Déconnexion
exit
```

---

## ✅ Solution - Configurer les Secrets GitHub

### Étape 1 : Récupérer la BONNE clé privée

La clé qui fonctionne pour vous connecter depuis votre Mac.

**Si vous utilisez `id_rsa` :**
```bash
cat ~/.ssh/id_rsa
```

**Si vous utilisez `id_ed25519` :**
```bash
cat ~/.ssh/id_ed25519
```

**Si vous utilisez une clé Google Cloud :**
```bash
cat ~/.ssh/google_compute_engine
```

Copiez **TOUTE** la clé (de `-----BEGIN` à `-----END` inclus) dans le presse-papiers :
```bash
cat ~/.ssh/id_rsa | pbcopy
# OU
cat ~/.ssh/id_ed25519 | pbcopy
```

### Étape 2 : Mettre à Jour le Secret GitHub

1. Allez sur : **https://github.com/Quentin693/CI-CDproject/settings/secrets/actions**

2. Trouvez le secret **`GCP_SSH_PRIVATE_KEY`**

3. Cliquez sur **"Update"** (crayon)

4. **Collez la clé privée complète** (celle qui vient de marcher)

5. Cliquez sur **"Update secret"**

### Étape 3 : Vérifier les Autres Secrets

Vérifiez aussi ces secrets :

**`GCP_HOST`** :
```
35.246.11.138
```

**`GCP_USERNAME`** :
```
quentin.cialone-gcp
```

---

## 🔧 Alternative : Créer une Nouvelle Clé SSH Dédiée

Si vous voulez une clé dédiée pour le déploiement :

### 1. Créer une nouvelle paire de clés

```bash
# Créer une clé spécifique pour le déploiement
ssh-keygen -t ed25519 -C "deploy@stayava" -f ~/.ssh/stayava_deploy

# Ne PAS mettre de passphrase (appuyez sur Entrée)
```

### 2. Ajouter la clé publique sur la VM GCP

```bash
# Copier la clé publique
cat ~/.ssh/stayava_deploy.pub

# Se connecter à la VM
ssh quentin.cialone-gcp@35.246.11.138

# Une fois connecté, ajouter la clé
echo "COLLEZ_LA_CLE_PUBLIQUE_ICI" >> ~/.ssh/authorized_keys

# Vérifier les permissions
chmod 600 ~/.ssh/authorized_keys

# Déconnexion
exit
```

### 3. Tester la nouvelle clé

```bash
ssh -i ~/.ssh/stayava_deploy quentin.cialone-gcp@35.246.11.138 "echo 'Connexion OK'"
```

### 4. Mettre à jour GitHub Secrets

```bash
# Copier la clé privée
cat ~/.ssh/stayava_deploy | pbcopy
```

Puis mettez à jour `GCP_SSH_PRIVATE_KEY` sur GitHub avec cette nouvelle clé.

---

## 🎯 Checklist de Vérification

- [ ] Vous pouvez vous connecter en SSH depuis votre Mac
- [ ] Vous avez identifié quelle clé fonctionne
- [ ] Vous avez copié la clé privée **complète** (BEGIN à END)
- [ ] Vous avez mis à jour le secret `GCP_SSH_PRIVATE_KEY` sur GitHub
- [ ] Les secrets `GCP_HOST` et `GCP_USERNAME` sont corrects
- [ ] Vous relancez le workflow GitHub Actions

---

## 🚀 Relancer le Déploiement

Une fois le secret mis à jour :

### Option 1 : Push un petit changement

```bash
cd /Users/quentinho/Projets/EEMI/CI-CDproject

# Ajouter un espace dans README ou créer un fichier
echo "# Déploiement" >> DEPLOY.md

git add .
git commit -m "chore: trigger deployment"
git push origin main
```

### Option 2 : Re-run le workflow

Sur GitHub Actions, cliquez sur **"Re-run failed jobs"**

---

## 📝 Format Attendu pour la Clé SSH

La clé privée doit ressembler à ça (exemple RSA) :

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
... plusieurs lignes ...
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-----END OPENSSH PRIVATE KEY-----
```

Ou pour ed25519 :

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
... plusieurs lignes ...
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
-----END OPENSSH PRIVATE KEY-----
```

**Important** : 
- ✅ Incluez `-----BEGIN` et `-----END`
- ✅ Toutes les lignes sans exception
- ✅ Pas d'espaces avant/après
- ❌ Ne pas ajouter de passphrase si demandée

---

## 🆘 Si Ça Ne Fonctionne Toujours Pas

### Vérifier que la connexion SSH fonctionne avec la clé

```bash
# Test avec verbose pour voir les détails
ssh -v -i ~/.ssh/id_rsa quentin.cialone-gcp@35.246.11.138
```

### Regarder les logs détaillés

Les logs SSH verbeux montreront quelle clé est essayée et pourquoi elle échoue.

---

Suivez ces étapes et le déploiement devrait fonctionner ! 🚀

