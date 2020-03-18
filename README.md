# Stacks
Difference btw lamp and mean stack
Amazon vs Youtube custom components

# Setup
## installing NodeJS from website
## Check installed with
node -v
npm -v

## Installing Angular with the Command Line Interface
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
Routing [Y]
Styling [CSS]

## To open the project in VSCode
cd book-store
code . [if you installed vscode in th PATH]

## Explaination of the differents files / folders
We will work inside the src/app/ folder

## Launch the local server
ng serve -o

## Simplify the app.component.html
<!-- line 333 -->
<span> {{ title }} app is running!</span>

<!-- last line -->
<router-outlet></router-outlet>

## Generate new components
`
ng generate component name-of-the-component
ng g c components/nav-bar
ng g c components/page-book-details
ng g c components/page-book-list
ng g c components/page-dashboard
`

## Handle the routing
in the routing module
they require a path and a component

---- Lunch Break ----

## Create the navbar and the links
`
<a [routerLink]="['/route',param?]"> link </a>
`

## CSS Framework
Materialize : https://materializecss.com/getting-started.html
Every CDN link should be inside the index.html

## Data access creation
Normal path : Component[UI] -> Service[Data] -> API
Adapted path : Component[UI] -> FakeData
export const fakeData = [{...},{...},{...}]

## List - *ngFor - Repetition Directive
`
<ul *ngFor="let book of myArray">
  <li> {{ book.name }} </li>
</ul>
`

## download Angular Language Service
This is an extension for code completion/suggestion

## Available ? - *ngIf - Conditional Directive
`
<span *ngIf="book.available">{{ book.price}}</span>
`

## Pipes - Change the representation of the data
`
<td>{{ book.author | uppercase }}</td>
<span>{{ book.price | currency : "EUR":true }}</span>
`

## Apply ONE class based on a boolean test
`
<tr [class.red-text]="!book.available">
`
Apply the class red-text if the test return "true"


## Details page - parameter in the routing
  1. Update app-routing to add a param ":isbn" to the url
  2. Catch the param on the component using Promise (susbscription)
  3. Filter the array to get the specified book


--- 18/03/2020 ---
# Advance Angular Course

## deployement -> At the end of the week / Continuous integration / SEO / PWA
Local Code -> Github (with some folder) -> Netlify (listen for change) "Build" -> Deploy

## Creation of the Service

(Model is the data structure to respect)
View (component) not touching the datas - just show
Controller (Service) Acces/Create/Modify/Delete the datas

- getAllBooks() the fakedata from the file (API)
- getOneBookByISBN(theISBN) - filter to get the book using IBSN
- getUnavailableBooks() - filter on all the book unavaible
- nbUnavailable() - length of the previous array
- nbAllBooks() - length of the previous array

## Dashboard
Contains Computed value