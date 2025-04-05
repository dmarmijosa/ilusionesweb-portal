#!/bin/bash

# Construir imágenes Docker
docker build -t ilusionesweb-frontend ./frontend
docker build -t ilusionesweb-backend ./backend

# Enviar imágenes al registry de DigitalOcean
docker tag ilusionesweb-frontend registry.digitalocean.com/ilusionesweb/frontend
docker tag ilusionesweb-backend registry.digitalocean.com/ilusionesweb/backend
docker push registry.digitalocean.com/ilusionesweb/frontend
docker push registry.digitalocean.com/ilusionesweb/backend

# Desplegar en Kubernetes
kubectl apply -f frontend-deployment.yaml
kubectl apply -f backend-deployment.yaml