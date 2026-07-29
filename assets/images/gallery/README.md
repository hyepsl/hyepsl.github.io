# Adding photos to the Gallery

1. Copy the photo into this folder.
2. Open `assets/js/site-data.js`.
3. Add an item inside the `gallery` list using this format:

```javascript
{
  src: "assets/images/gallery/example.jpg",
  title: "WHEC 2026",
  date: "2026-07-01",
  location: "Singapore",
  caption: "Presenting my work at the World Hydrogen Energy Conference.",
  alt: "Conference presentation in Singapore"
}
```

Add a comma between multiple photo items. Photos are displayed newest first.
