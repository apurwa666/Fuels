
#!/bin/bash
# Script to package the FuelMails project for local download
# Run this in your terminal: bash download-project.sh

echo "📦 Packaging project..."
# Remove any old archive files first
rm -f project.zip
rm -f project.tar.gz
rm -f fuelmails-app.zip

# Create a tarball as it's more widely available than zip in this environment
if tar -czf project.tar.gz --exclude='./.next' --exclude='./node_modules' --exclude='./.git' --exclude='./.agents' --exclude='./project.tar.gz' . ; then
  echo "✅ Success! project.tar.gz has been created."
  echo "👉 Now, right-click 'project.tar.gz' in the sidebar and select 'Download' to save it to your computer."
else
  echo "❌ Error: Failed to create archive."
  exit 1
fi
