# Laravel

Criar projeto
```
composer create-project laravel/laravel my-crud
```

Configurar .env

Criar API
```
php artisan install:api
```

Criar Model
```
php artisan make:model Person
```

Criar Migration
```
php artisan make:migration create_person_table
```

Rodar Migrations
```
php artisan migrate
```

Testar Laravel
```
php artisan serve
```

Criar alguns registros (Seeders)
```
php artisan make:seeder PersonSeeder
```

Criar Controller para CRUD
```
php artisan make:controller Api/PersonController
```

Configurar métodos na Controller os associando em rotas de acesso em api.php

API pronta!