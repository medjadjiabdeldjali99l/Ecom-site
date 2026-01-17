# 🧪 Guide de Test - Intégration Supabase

## Étape 1: Démarrer le Serveur de Développement

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
npm run dev
```

Le serveur devrait démarrer sur `http://localhost:3000`

## Étape 2: Tester la Soumission de Commande

### Test Manuel

1. **Ouvrez votre navigateur** : `http://localhost:3000`

2. **Remplissez le formulaire** avec des données de test :
   - **Nom Complet** : Ahmed Benali
   - **Téléphone** : 0555123456
   - **Wilaya** : Choisissez n'importe quelle wilaya (ex: 16 - Alger)
   - **Commune** : Choisissez une commune
   - **Mode de livraison** : À Domicile ou Au Bureau

3. **Cliquez sur "Confirmer la Commande"**

4. **Vérifiez** :
   - ✅ Le bouton affiche "Traitement en cours..."
   - ✅ Vous êtes redirigé vers `/success`
   - ✅ Pas d'erreur dans la console du navigateur

### Vérifier dans Supabase

1. Allez sur [app.supabase.com](https://app.supabase.com)
2. Ouvrez votre projet
3. Allez dans **Table Editor** → **orders**
4. Vous devriez voir votre commande avec :
   - ✅ Nom du client
   - ✅ Numéro de téléphone
   - ✅ Wilaya et commune
   - ✅ Prix total
   - ✅ Statut = "pending"

## Étape 3: Vérifier les Logs

### Dans le Terminal (Next.js)

Regardez le terminal où `npm run dev` tourne. Vous devriez voir :
- Pas d'erreurs 500
- Les requêtes API passent correctement

### Dans la Console du Navigateur

1. Ouvrez les **DevTools** (F12)
2. Allez dans l'onglet **Console**
3. Soumettez une commande
4. Vérifiez qu'il n'y a pas d'erreurs rouges

### Dans l'onglet Network

1. Ouvrez **DevTools** → **Network**
2. Soumettez une commande
3. Cherchez la requête `POST /api/orders`
4. Vérifiez :
   - ✅ Status: 201 Created
   - ✅ Response contient `{ success: true, order: {...} }`

## Étape 4: Tester les Cas d'Erreur

### Test 1: Champs Vides

1. Essayez de soumettre le formulaire sans remplir tous les champs
2. ✅ Vous devriez voir des messages d'erreur en rouge

### Test 2: Téléphone Invalide

1. Entrez un numéro invalide : `123456`
2. ✅ Vous devriez voir : "Format invalide (ex: 0555123456)"

### Test 3: Connexion Supabase

Si vous voyez une erreur "Erreur lors de la création de la commande" :
- Vérifiez que `.env.local` contient les bonnes clés
- Vérifiez que la table `orders` existe dans Supabase
- Vérifiez que les RLS policies sont bien configurées

## Étape 5: Tester l'API Directement

Vous pouvez tester l'API avec curl ou Postman :

```bash
# Créer une commande
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Test User",
    "phone": "0555123456",
    "wilaya_code": "16",
    "wilaya_name": "Alger",
    "commune": "Bab El Oued",
    "delivery_method": "home",
    "delivery_price": 600,
    "product_price": 3500,
    "total_price": 4100
  }'
```

Réponse attendue :
```json
{
  "success": true,
  "order": {
    "id": "uuid-here",
    "full_name": "Test User",
    ...
  }
}
```

## Étape 6: Récupérer les Commandes (Admin)

```bash
# Récupérer toutes les commandes
curl http://localhost:3000/api/orders
```

Réponse attendue :
```json
{
  "orders": [
    {
      "id": "...",
      "full_name": "...",
      ...
    }
  ]
}
```

## ✅ Checklist de Vérification

- [ ] Le serveur démarre sans erreur
- [ ] La page d'accueil s'affiche correctement
- [ ] Le formulaire se remplit sans problème
- [ ] La soumission fonctionne (pas d'erreur)
- [ ] Redirection vers `/success`
- [ ] La commande apparaît dans Supabase
- [ ] Les données sont correctes dans la base
- [ ] Le statut est "pending"
- [ ] Les validations fonctionnent (champs vides, téléphone invalide)

## 🐛 Problèmes Courants

### Erreur: "Invalid API key"
**Solution** : Vérifiez que les clés dans `.env.local` sont correctes et que vous avez redémarré le serveur après avoir créé le fichier.

### Erreur: "Row Level Security policy violation"
**Solution** : Vérifiez que vous avez bien exécuté le SQL pour créer les policies RLS.

### Erreur: "relation 'orders' does not exist"
**Solution** : Vous n'avez pas créé la table. Exécutez le SQL dans `SUPABASE_SETUP.md`.

### La commande ne s'affiche pas dans Supabase
**Solution** : 
1. Vérifiez que vous êtes dans le bon projet Supabase
2. Rafraîchissez la page Table Editor
3. Vérifiez les logs dans l'onglet Logs de Supabase

## 📊 Prochaines Étapes

Une fois que tout fonctionne :
1. ✅ Créer le dashboard admin
2. ✅ Tester l'authentification admin
3. ✅ Déployer sur Vercel
