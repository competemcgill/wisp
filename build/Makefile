.PHONY: start start-api start-problems start-users forward-problems forward-users

start:
	@echo "Starting local dev server..."
	@echo "UI: http://localhost:8080"
	@echo "API: http://localhost:3000"
	@docker-compose up

start-api:
	@echo "Starting local dev server without UI..."
	@echo "API: http://localhost:3000"
	@docker-compose up --scale wisp-ui=0

start-problems:
	@echo "Starting local problems server..."
	@echo "Problems API: http://localhost:3001"
	@docker-compose up --scale wisp-ui=0 --scale wisp-gateway=0 --scale wisp-users=0

start-users:
	@echo "Starting local users server..."
	@echo "Problems API: http://localhost:3001"
	@echo "Users API: http://localhost:3002"
	@docker-compose up --scale wisp-ui=0 --scale wisp-gateway=0

forward-problems:
	@echo "Forwarding port 3001 to problems microservice..."
	@kubectl port-forward -n prod deploy/wisp-problems 3001:3000

forward-users:
	@echo "Forwarding port 3002 to users microservice..."
	@kubectl port-forward -n prod deploy/wisp-users 3002:3000
