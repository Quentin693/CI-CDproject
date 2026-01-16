# 🔐 Solution Finale - Problème SSH

## 🔴 Erreur Persistante
```
cialonequentin@35.246.11.138: Permission denied (publickey)
```

---

## ✅ Solution Définitive

### **Option A : Créer une Nouvelle Clé SSH Dédiée**

#### 1. Créer une nouvelle paire de clés

```bash
# Créer une clé spécifique pour ce projet
cd ~/.ssh
ssh-keygen -t ed25519 -C "deploy-stayava" -f ~/.ssh/gcp_stayava

# NE PAS mettre de passphrase (appuyez sur Entrée)
```

#### 2. Afficher la clé publique

```bash
cat ~/.ssh/gcp_stayava.pub
```

Vous obtiendrez quelque chose comme :
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx deploy-stayava
```

#### 3. Ajouter la clé sur GCP via l'interface Web

1. **Allez sur** : https://console.cloud.google.com/compute/metadata/sshKeys
2. **Cliquez sur "Modifier"**
3. **Cliquez sur "Ajouter un élément"**
4. **Collez TOUTE la ligne** de la clé publique (celle d'au-dessus)
5. **Cliquez sur "Enregistrer"**
6. **Attendez 30 secondes**

#### 4. Tester la nouvelle clé

```bash
# Test avec la nouvelle clé
ssh -i ~/.ssh/gcp_stayava cialonequentin@35.246.11.138 "echo 'Connexion réussie!'"
```

✅ **Si ça fonctionne**, passez à l'étape 5 !

#### 5. Mettre à jour les fichiers d'inventaire Ansible

```bash
cd /Users/quentinho/Projets/EEMI/CI-CDproject
```

Modifiez `ansible/inventory/production.ini` :
```ini
[production]
gcp-prod ansible_host=35.246.11.138 ansible_user=cialonequentin ansible_ssh_private_key_file=~/.ssh/gcp_stayava
```

Modifiez `ansible/inventory/develop.ini` :
```ini
[development]
gcp-dev ansible_host=35.246.11.138 ansible_user=cialonequentin ansible_ssh_private_key_file=~/.ssh/gcp_stayava
```

#### 6. Configurer GitHub Secrets

```bash
# Copier la clé PRIVÉE
cat ~/.ssh/gcp_stayava | pbcopy
```

**Allez sur** : https://github.com/Quentin693/CI-CDproject/settings/secrets/actions

**Mettez à jour** `GCP_SSH_PRIVATE_KEY` avec la clé privée que vous venez de copier (de BEGIN à END)

#### 7. Commit et Push

```bash
git add ansible/inventory/
git commit -m "fix: configuration SSH avec nouvelle clé dédiée"
git push origin main
```

---

### **Option B : Utiliser la Clé Existante**

#### 1. Identifier quelle clé fonctionne

```bash
# Lister vos clés
ls -la ~/.ssh/

# Essayer différentes clés
ssh -i ~/.ssh/id_rsa cialonequentin@35.246.11.138 "echo OK"
ssh -i ~/.ssh/id_ed25519 cialonequentin@35.246.11.138 "echo OK"
ssh -i ~/.ssh/google_compute_engine cialonequentin@35.246.11.138 "echo OK"
```

#### 2. Une fois que vous trouvez celle qui marche

```bash
# Exemple : si c'est google_compute_engine
cat ~/.ssh/google_compute_engine | pbcopy
```

#### 3. Mettre à jour GitHub Secret

Allez sur : https://github.com/Quentin693/CI-CDproject/settings/secrets/actions

Mettez à jour `GCP_SSH_PRIVATE_KEY` avec cette clé

#### 4. Mettre à jour l'inventaire Ansible

Changez dans `production.ini` et `develop.ini` :
```ini
ansible_ssh_private_key_file=~/.ssh/google_compute_engine
```

---

## 🎯 Checklist de Vérification

- [ ] Vous pouvez vous connecter en SSH depuis votre Mac
- [ ] La clé publique est bien sur GCP (interface métadonnées SSH)
- [ ] La clé privée complète est dans `GCP_SSH_PRIVATE_KEY`
- [ ] Les secrets `GCP_HOST` et `GCP_USERNAME` sont corrects
- [ ] Les fichiers d'inventaire pointent vers la bonne clé
- [ ] Les changements sont committés et poussés

---

## 🔍 Debug Avancé

### Connexion SSH avec verbose

```bash
ssh -vvv -i ~/.ssh/gcp_stayava cialonequentin@35.246.11.138
```

Regardez les lignes qui disent :
- `debug1: Offering public key:` → Quelle clé est proposée
- `debug1: Authentications that can continue:` → Pourquoi elle est refusée

### Vérifier les clés sur la VM

Si vous arrivez à vous connecter, vérifiez :
```bash
ssh cialonequentin@35.246.11.138 "cat ~/.ssh/authorized_keys"
```

---

## ⚠️ Points Importants

1. **La clé publique** (celle qui finit par `.pub`) va sur GCP
2. **La clé privée** (sans `.pub`) va dans GitHub Secrets
3. **Ces deux clés DOIVENT être une paire** (générées ensemble)
4. **Pas de passphrase** sur la clé pour l'automatisation

---

Je recommande fortement **l'Option A** (créer une nouvelle clé dédiée) car c'est :
- ✅ Plus propre
- ✅ Plus sécurisé
- ✅ Pas de confusion avec d'autres clés
- ✅ Vous êtes sûr que la paire publique/privée correspond

---

Suivez l'Option A étape par étape ! 🚀

