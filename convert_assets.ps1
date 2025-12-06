Add-Type -AssemblyName System.Drawing
$files = @("assets\icon.png", "assets\splash.png", "assets\adaptive-icon.png")

foreach ($file in $files) {
    $fullPath = Join-Path (Get-Location) $file
    if (Test-Path $fullPath) {
        Write-Host "Processing $file..."
        $temp = $fullPath + ".tmp"
        Copy-Item $fullPath $temp -Force
        
        try {
            $img = [System.Drawing.Image]::FromFile($temp)
            $format = $img.RawFormat
            
            # Check if it's already PNG (GUID comparison)
            if ($format.Guid -eq [System.Drawing.Imaging.ImageFormat]::Png.Guid) {
                 Write-Host "  $file is already a PNG. Skipping."
            } else {
                 Write-Host "  $file is NOT a PNG. Converting..."
                 # Force save as PNG
                 $img.Save($fullPath, [System.Drawing.Imaging.ImageFormat]::Png)
                 Write-Host "  Successfully converted $file to PNG."
            }
            $img.Dispose()
        } catch {
            Write-Host "  Error processing $file : $_"
        } finally {
            if ($img) { $img.Dispose() }
            if (Test-Path $temp) { Remove-Item $temp -Force }
        }
    } else {
        Write-Host "File not found: $file"
    }
}
