import asyncio
import random
import aiohttp
import time

# Función para agregar un nuevo usuario
async def addnewUser(session, user_id):
    url = "http://5.161.104.98:3005/graphql"
    payload = {
        "query": """
            mutation addnewUser($email: String!, $nombre: String!, $password: String!, $rol: Int!) {
                addnewUser(email: $email, nombre: $nombre, password: $password, rol: $rol) {
                    status
                    message
                }
            }
        """,
        "variables": {
            "email": f"usuario_a{user_id}@example.com",
            "nombre": "NombreUsuario",
            "password": "password123",
            "rol": 2
        }
    }
    async with session.post(url, json=payload) as response:
        result = await response.json()
        if result.get("data", {}).get("addnewUser", {}).get("status") == True:
            print("Success:", result["data"]["addnewUser"]["message"])
            return 1
        else:
            print("Error:", result.get("data", {}).get("addnewUser", {}).get("message", "Unknown error"))
            return 0

# Función para obtener todas las categorías
async def getCategories(session):
    url = "http://5.161.104.98:3005/graphql"
    payload = {
        "query": """
            query GetCategories {
                getCategories {
                    idCategory
                    name
                    image
                }
            }
        """
    }
    async with session.post(url, json=payload) as response:
        result = await response.json()
        # Verificar si la respuesta tiene el campo `data` y `getCategories`
        if "data" in result and "getCategories" in result["data"]:
            print("Success: Retrieved categories")
            return 1  # Éxito
        else:
            print("Error: Failed to retrieve categories")
            return 0  # Error

# Función para validar la existencia de un usuario
async def validateUser(session, email, password):
    url = "http://5.161.104.98:3005/graphql"
    payload = {
        "query": """
            query ValidateCredentials($email: String!, $password: String!) {
                validateCredentials(email: $email, password: $password) {
                    email
                }
            }
        """,
        "variables": {
            "email": email,
            "password": password
        }
    }
    async with session.post(url, json=payload) as response:
        result = await response.json()
        if result.get("data", {}).get("validateCredentials") is not None:
            print("Success: User exists")
            return 1
        else:
            print("Error: User does not exist")
            return 0

# Función para usuarios que hacen ambas tareas
async def mixedUser(session, user_id):
    success_add_user = await addnewUser(session, user_id)
    await asyncio.sleep(random.uniform(1, 3))
    success_get_categories = await getCategories(session)
    return 1 if success_add_user == 1 and success_get_categories == 1 else 0

# Función principal para ejecutar la prueba
async def main(num_requests):
    async with aiohttp.ClientSession() as session:
        tasks = []
        for i in range(num_requests):
            user_type = random.choice(["add", "get", "validate", "mixed"])
            if user_type == "add":
                tasks.append(addnewUser(session, i))
            elif user_type == "get":
                tasks.append(getCategories(session))
            elif user_type == "validate":
                email = f"aguilar@gmail.com"  # Usuario existente
                tasks.append(validateUser(session, email, "123"))
            else:
                tasks.append(mixedUser(session, i))

        start_time = time.time()
        results = await asyncio.gather(*tasks)
        end_time = time.time()

        success_count = sum(results)
        error_count = num_requests - success_count

        print(f"Completed {num_requests} requests in {end_time - start_time:.2f} seconds")
        print(f"Success rate: {success_count / num_requests * 100:.2f}%")
        print(f"Error rate: {error_count / num_requests * 100:.2f}%")

# Ejecutar 10,000 solicitudes concurrentes
asyncio.run(main(10000))
