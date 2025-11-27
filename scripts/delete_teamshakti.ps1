# Delete TeamShakti assets (destructive) - run from repo root (PowerShell)
# Usage: .\scripts\delete_teamshakti.ps1 [-WhatIf]
param(
    [switch]$WhatIf
)

$files = @(
    "assets/img/TEAMSHAKTI.png",
    "assets/img/TEAMSHAKTI.ico",
    "assets/img/Team.png",
    "assets/img/team1.png",
    "assets/img/team11.png",
    "assets/img/logo_11.png",
    "assets/img/logo_12.png",
    "assets/img/logo_1.png",
    "assets/img/winjatalk.png",
    "assets/img/winjacombined.jpg",
    "assets/img/girls_giving_talk.jpg",
    "assets/img/girls_winning.jpg",
    "assets/img/girls_winning1.jpg",
    "assets/img/girl_leaders.jpg",
    "assets/img/group.jpg",
    "assets/img/colleagues.jpg",
    "assets/img/team_growth.jpg",
    "assets/img/triumphant.jpg",
    "assets/img/getting_scholarship.jpg",
    "assets/img/Blackhat19.jpg",
    "assets/img/blackhat_2020.jpg",
    "assets/img/bsides.jpg",
    "assets/img/bsides20.jpg",
    "assets/img/bsides20.png",
    "assets/img/hacklu19.jpg",
    "assets/img/hack.jpg",
    "assets/img/gscologo.png",
    "assets/img/geethna.jpg",
    "assets/img/sreepriya_chechi.jpg",
    "assets/img/vipin_sir.jpg",
    "assets/img/Meenakshi.jpeg",
    "assets/img/namitha.jpg",
    "assets/img/nimisha.jpg",
    "assets/img/shruthi.jpg",
    "assets/img/Sowmya.jpg",
    "assets/img/Ayushi.jpg",
    "assets/img/AyushiGSoc.jpg",
    "assets/img/diana.jpg",
    "assets/img/dianainit.jpg",
    "assets/img/ashwathi.jpg",
    "assets/img/Gopika.jpg",
    "assets/img/sandhra.jpg",
    "assets/img/sim.jpg",
    "assets/img/wicys.jpeg"
)

Write-Host "This script will delete TeamShakti-related images listed below:`n"
$files | ForEach-Object { Write-Host " - $_" }

if ($WhatIf) {
    Write-Host "\nRunning in WhatIf mode: no files will be removed. Use without -WhatIf to actually delete."
} else {
    Write-Host "\nDeleting files..."
    foreach ($f in $files) {
        if (Test-Path $f) {
            try {
                Remove-Item -Path $f -Force -ErrorAction Stop
                Write-Host "Deleted: $f"
            } catch {
                Write-Warning "Failed to delete $f: $_"
            }
        } else {
            Write-Host "Not found: $f"
        }
    }
    Write-Host "\nDeletion complete."
}

Write-Host "If you want me to also replace pages with redirects and regenerate static project cards, tell me and I'll proceed."