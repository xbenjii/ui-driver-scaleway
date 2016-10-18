# ui-driver-scaleway
Rancher UI driver for scaleway docker-machine driver. This is unofficial and by no means implies any affiliation with Scaleway, I just wanted my Rancher UI to be a little prettier.

## Setup, Development, Building
* Follow the guide in the Rancher repository [ui-driver-skel](https://github.com/rancher/ui-driver-skel).

## Using
* A release is published to the [gh-pages](https://github.com/mitcdh/ui-driver-scaleway/tree/gh-pages) branch of this repository.
* Add a Machine Driver in Rancher (Admin tab -> Settings -> Machine Drivers)
  * Download URL: The URL for the driver binary from `https://github.com/scaleway/docker-machine-driver-scaleway/releases`
  * Custom UI URL: `https://mitcdh.github.io/ui-driver-scaleway/component.js`
* Wait for the driver to become "Active"
* Go to Infrastructure -> Hosts -> Add Host, the Scaleway driver and custom UI should show up.
