symfony version
Symfony CLI version 5.10.6
php -v
PHP 8.2.27 (cli)


     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 15.0.4
Node: 16.13.2
Package Manager: npm 8.19.2
OS: linux x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1500.4 (cli-only)
@angular-devkit/core         15.0.4 (cli-only)
@angular-devkit/schematics   15.0.4 (cli-only)
@schematics/angular          15.0.4 (cli-only)
    


composer create-project symfony/skeleton:"^5.4" eolia-mars-2025
composer require symfony/orm-pack

composer require --dev symfony/maker-bundle
php bin/console doctrine:database:create

composer require symfony/security-bundle

php bin/console make:user

composer require api
php bin/console doctrine:schema:update --force
composer require doctrine/orm symfony/serializer

Ne pas oublier symfony serve -d

creer controller dans symfony qui renvoie les données en format json
et route api/

ng generate component User --standalone --inline-template


ng g article --standalone --inline-template

