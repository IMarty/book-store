# Stacks
Difference btw lamp and mean stack
Amazon vs Youtube custom components

# Setup
## installing NodeJS from website
## Check installed with
node -v
npm -v

## Installing Angular with the command line
npm install -g @angular/cli

## if pbm with installation policy
Set-ExecutionPolicy Unrestricted

## if MacOS
sudo npm install -g @angular/cli
[enter your password]

## Checking with
ng version

# Create an Angular Project
Shift + right-click to open powershell in a folder
ng new book-store
Routing Yes
Styling CSS

## To open the project in VSCode
cd book-store
code . [if you installed vscode in th PATH]

## Explaination of the differents files / folders

## Launch the local server
ng serve -o

## Simplify the app.component.html
<!-- line 333 -->
<span> {{ title }} app is running!</span>

<!-- last line -->
<router-outlet></router-outlet>

## Generate new components
ng generate component name-of-the-component
ng g c components/nav-bar
ng g c components/page-book-details
ng g c components/page-book-list
ng g c components/page-dashboard

## Handle the routing
---- Lunch Break ----
## Create the navbar and the links
## CSS Framework
## Data access creation
## List *ngFor
## download Angular Language Service
## Available ? ngIf
## Categories Colors

## Details page
update to add a param isbn to the url
Catch the param on the component using promise
Filter the array to get the specified book
