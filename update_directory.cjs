const fs = require('fs');

let content = fs.readFileSync('src/components/CompleteServicesDirectoryCards.tsx', 'utf8');

// We need to add `id?: string;` to `ServiceItem` interface
content = content.replace(/interface ServiceItem {\n  name: string;\n  desc: string;\n}/, `interface ServiceItem {\n  id?: string;\n  name: string;\n  desc: string;\n}`);

// Now we need to inject IDs into the data by slugifying the names
// Simple slugify
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Find the start of the DIRECTORY_CATEGORIES array and end
// But wait, the easiest way is just to regex replace the name field
content = content.replace(/name:\s*'([^']+)',\n\s*desc:/g, (match, name) => {
  return `id: '${slugify(name)}',\n        name: '${name}',\n        desc:`;
});

// Now we need to update the card render to include a link to the ServiceDetailPage
// In CompleteServicesDirectoryCards.tsx we have a loop mapping over `items`.

content = content.replace(/<strong className="font-bold text-slate-900">{item.name}<\/strong>/g, 
  `<button onClick={() => onNavigate && onNavigate('service-detail', item.id)} className="font-bold text-violet-700 hover:text-violet-900 underline text-left cursor-pointer">{item.name}</button>`);

fs.writeFileSync('src/components/CompleteServicesDirectoryCards.tsx', content, 'utf8');
console.log("Updated CompleteServicesDirectoryCards.tsx");

