# Guide de Déploiement Vercel & Supabase

Ce guide vous explique comment mettre votre site en ligne sur Vercel et connecter la base de données Supabase.

## 1. Préparation (GitHub)
Le moyen le plus simple est de passer par GitHub.

1.  Créez un **nouveau repository** sur GitHub (ex: `mon-ecom-site`).
2.  Poussez votre code dessus :
    ```bash
    git init
    git add .
    git commit -m "Premier commit"
    git branch -M main
    git remote add origin https://github.com/VOTRE_USER/mon-ecom-site.git
    git push -u origin main
    ```

## 2. Création du projet sur Vercel
1.  Allez sur [Vercel.com](https://vercel.com) et connectez-vous.
2.  Cliquez sur **"Add New..."** > **"Project"**.
3.  Importez votre repository GitHub (`mon-ecom-site`).
4.  Dans l'écran de configuration "Configure Project" :
    - **Framework Preset** : Next.js (doit être détecté automatiquement).
    - **Root Directory** : `./` (par défaut).

## 3. Configuration des Variables d'Environnement (.env)
C'est l'étape cruciale pour connecter Supabase.
Dans la section **"Environment Variables"**, ajoutez les variables suivantes une par une (copiez les valeurs depuis votre fichier `.env.local` ou `.env.local.example`) :

| Variable Name | Value (Exemple) |
| :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xyz.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIs...` (Votre clé publique) |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGciOiJIUzI1NiIs...` (Votre clé secrète service_role) |
| `NEXT_PUBLIC_PRODUCT_PRICE` | `3500` |

> [!IMPORTANT]
> Assurez-vous d'utiliser la clé **SERVICE_ROLE** pour la variable `SUPABASE_SERVICE_ROLE_KEY`, sinon les commandes ne pourront pas s'enregistrer (bypass RLS).

## 4. Déploiement
1.  Cliquez sur **"Deploy"**.
2.  Attendez que la construction (Build) se termine (environ 1-2 minutes).
3.  Une fois terminé, vous aurez une URL du type `mon-ecom-site.vercel.app`.

## 5. Vérification
1.  Ouvrez votre site en ligne via l'URL fournie.
2.  Testez l'ajout au panier et la commande.
3.  Vérifiez dans votre tableau de bord Supabase que la commande est bien arrivée.

---
**En cas de problème "500 Internal Server Error" lors de la commande :**
Vérifiez que la variable `SUPABASE_SERVICE_ROLE_KEY` est bien correcte dans Vercel.
