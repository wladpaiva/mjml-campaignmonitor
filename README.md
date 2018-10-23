# mjml-campaignmonitor for [MJML](https://mjml.io/)

This project is intent to provide support for the Campaign Monitor custom tags on the MJML.

List of components:

* cm-repeater
* cm-layout
* cm-image


## Setup

```
yarn add mjml-campaignmonitor
```


## Usage 

```html
<mjml>
  <mj-body>
    <cm-repeater>
      <cm-layout label="test">
        <mj-section>
          <mj-column>
            <cm-image width="100px" src="https://via.placeholder.com/100x100" />
          </mj-column>
        </mj-section>
      </cm-layout>
    </cm-repeater>
  </mj-body>
</mjml>
```



##### Documentation

All components have the same attributes as the [campaign monitor document](https://www.campaignmonitor.com/create/editable-content/) describe.

*cm-image*:

| attribute                        | description                             | default value  |
| -------------------------------- | --------------------------------------- | -------------- |
| disable-importing                | replace `cm_dontimportimage` attribute  | false          |
| disable-tracking                 | replace `cm_dontconvertlink` attribute  | false          |
| editable                         | replace `editable` attribute            | true           |
| placeholder                      | use an placeholder image                | false          |
| ...any other mj-image attribute  |                                         |                |
