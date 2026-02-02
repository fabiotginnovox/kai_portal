#!/bin/bash

# Script to update InnoCore client from running server
# Make sure InnoCore server is running on localhost:8080

echo "Downloading OpenAPI spec from InnoCore server..."
curl -f -o openapi.json http://localhost:8080/openapi.json

if [ $? -eq 0 ]; then
    echo "✓ OpenAPI spec downloaded successfully"
    echo "Generating TypeScript client..."
    npm run generate-innocore
    echo "✓ InnoCore client updated successfully"
else
    echo "✗ Failed to download OpenAPI spec. Make sure InnoCore server is running on http://localhost:8080"
    exit 1
fi
