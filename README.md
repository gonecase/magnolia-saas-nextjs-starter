![Dotfusion Logo](https://dotfusion.azurewebsites.net/static/media/logo-onwhite.432b58af.svg)

# Magnolia SAAS / NextJS starter

This is the dotfusion starter kit for any Magnolia SAAS powered website. The project uses NextJS in SSR (Server Side Rendering) mode. In the future there will be support for SG (Static Generation) and ISR (Incremental Static Regeneration) after the Magnolia SAAS product has Webhooks ready.

## Table of contents

1. [Aims](#aims)
2. [Quick Start](#quick-start)
   1. [Additional Need to Knows](#additional-need-to-knows)
3. [Learn By Example](#learn-by-example)
   1. [Modify a component](#toc5)
   2. [Create a component](#toc6)
   3. [Component with serverside props](#toc7)
4. [Under the hood](#toc8)
5. [Common Pitfalls](#toc9)

## Aims

- 🔌 **Plug and play**

> A developer should be able to plug in basic env variables and and have the app start and render auto-magically.

- 👯 **Front end developer focussed**

> Data should belong in data, front end developers shouldn't have to concern themselves with the CMS as long as the data is being passed to their components as expected.

- 🤸‍♂️ **YAML / React Bridges**

> A future feature where react components should be able to be "aware" of the component schema from magnolia's component definitions.

- 🤾‍♂️ **SEO friendliness**

> Components should be able to get the content they need from external or API services via serverside calls for SEO indexing support.

## Quick Start

1. Clone this repo
2. Duplicate `.env.example` as `.env.local` and read all the comments and fill out the environment variables in `.env.local`
3. Add / Edit component and page templates and definitions in the `light-modules` folder
4. **Import** and **Expose** your components to magnolia and the page editor via `magnolia/magnoliaEditorConfig.js`

### Additional Need to Knows

- **CSS** : There is no limitation on style. You can use anything that next js supports. Just look at the docs and bring it in. By default, this project is setup with tailwind, but really, you can bring what you would like in - CSSinJS, CSS modules, you name it. Additionally, all the examples here will not focus on style, instead showing the developer the correct method to pass props and enable data flows.

- **Context** : Application context is depriotitized by design. This project relies heavily on magnolia's `react-editor` component which uses a pattern of passing props down the pipe. We will aim to have a better way of managing this as components that are used in conjuction with each other - especially within areas or zones, need to sometimes have knowledge of each other's props.

- **Magnolia** : You will need some knowledge of how to author in magnolia. The best way to do this is to play. Create a folder on the root level with your name and go bananas for an hour or so. Create pages, create components, edit things, get a feel for it. If you break something, reach out on the dot_developers slack channel.

## Project structure

```
components/             # where you can put your react components
light-modules/
-> [myprojectname]-lm/  # central light module project code
  -> apps/              # content app definitions
  -> contentTypes/      # content app dialog definitions
  -> templates/         # page and commponent definitions
  -> dialogs/           # page and commponent dialog definitions
  -> i18n/              # ??
  -> restEndpoints/     # REST endpoint definitions
  -> system/            # magnolia configuration files
  -> module.yaml        # project versioning
magnolia/
-> corecomponents/
  -> RenderPage         # render page in and outside the editor
  -> MagnoliaImage      # magnolia-fastly image component
  -> Raw
    -> RawTemplate.js   # raw template component
    -> Raw.js           # raw component component
-> magnolia.config.js   # component to data mapping
-> index.js             # exports various async get calls with magnolia REST API
pages/                  # next pages
public/                 # next public folder
.env.local              # env file
```

## Essential Light Development

To be able to build components that work with magnolia's page editor as well as building content apps to power any type of content hub imaginable.

### Pages, Components, Templates and Dialogs

Lets start by thinking about how you need to let magnolia know about your page, or your component and the properties it has.

Then let us think about how we can make editable fields for that page or component.

### Page -> Area • Area -> Component • Component -> Area

Pages are places that contain areas. It is good to think of areas as an array of components. So you can have a `main` area, and a `sidebar` area, for example. There are no limits to the amount of areas, but when designing, remember that _less is more_.

One of the cool things about magnolia is the ability for components to have areas. This means you can expose components which have droppable components in them. So components can contain areas.

Each area needs to have an explicit declaration of what components are available to that area. For example, you might have a component that displays a twitter feed, but you only want to restrict it to your `sidebar` area. Or you could have a component like a slideshow, which has a `slideshowContainer` area, which only has `slide` components available to it. This means, i cannot simply drop a `slide` component into any area, it will only work for the `slideshowContainer` area.

If that seemed confusing, dont worry, as we go further we will learn by example and all will be clear.

### Content Apps

Think about structured data.

## Learn By Example

The following quick guides should get you started on being able to get into the weeds and get typing. Completing these will take about 2-4 hours depending on your understanding of working with headless CMSes.

### Modify a component

_**TBD**: Editing a dialog field and template field / wiring to a react component. https://docs.magnolia-cms.com/product-docs/6.2/Templating/Dialog-definition/Field-definition/List-of-fields/Link-field.html for field definitions._

### Create a component

First create a template file for the component. This template file tells magnolia that it is a component it needs to be aware of for authoring.
Second, create a dialog file for the component if it has authorable fields.
Third, create mappings for that component in `/magnolia/magnoliaEditorConfig.js`
Fourth, commit this code into a branch prefixed with `env/`; eg: `env/{branch-name}`
Fifth, edit your react component.

_**TBD**: Setting up the editor in magnolia / authoring the dialogs and templates / wiring to a react component._

### Component with serverside props

_**TBD**: Hooking up a component with `getServerSideProps()`._

### Content apps

_**TBD**: https://docs.magnolia-cms.com/product-docs/6.2/Modules/List-of-modules/Content-Types-module/Content-type-definition/Content-type-Model-definition.html for field definiations of conntent app._

## Under the hood

_**TBD**: How it all fits together. Environments and git branches. How props are passed. Quick debug method. Areas in templates (chicken and egg) explained. Suggested project structure. The `magnolia/` folder._

## Common pitfalls

_**TBD**: Handling application cache in magnolia when it logs you out._

---

![Magnolia](https://upload.wikimedia.org/wikipedia/commons/archive/a/a1/20190913144807%21Magnolia_%28CMS%29_logo.svg)
