
import sys, io, shutil
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

FILE_PATH = 'C:/Users/jg/Downloads/ㅇㅇ/드래프트/드래프트_2026.txt'
BACKUP_PATH = 'C:/Users/jg/Downloads/ㅇㅇ/드래프트/드래프트_2026_backup.txt'

shutil.copy2(FILE_PATH, BACKUP_PATH)
print('Backup created.')

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    lines = f.read().split('
')
print(f'Total lines: {len(lines)}')

pos_after_brown6 = None
pos_ament7_start = None
pos_philon11_end_blank = None
pos_steinbach12_start = None
pos_cenac14_end_blank = None
pos_boozer15_start = None
pos_roman17_end_blank = None
pos_fland18_start = None
pos_acuff34_start = None
pos_acuff34_end = None
tier5_start = None

for idx, line in enumerate(lines):
    if '#6 MIKEL BROWN' in line:
        for j in range(idx, min(idx+15, len(lines))):
            if lines[j].startswith('[성향]') and '3PT=' in lines[j]:
                pos_after_brown6 = j + 1
                break
    if '#7 NATE AMENT' in line:
        pos_ament7_start = idx
    if '#11 LABARON PHILON' in line:
        for j in range(idx, min(idx+15, len(lines))):
            if lines[j].startswith('[성향]') and '3PT=' in lines[j]:
                pos_philon11_end_blank = j + 1
                break
    if '#12 HANNES STEINBACH' in line:
        pos_steinbach12_start = idx
    if '#14 CHRIS CENAC' in line:
        for j in range(idx, min(idx+15, len(lines))):
            if lines[j].startswith('[성향]') and '3PT=' in lines[j]:
                pos_cenac14_end_blank = j + 1
                break
    if '#15 CAYDEN BOOZER' in line:
        pos_boozer15_start = idx
    if '#17 DEVANTE ROMAN' in line:
        for j in range(idx, min(idx+15, len(lines))):
            if lines[j].startswith('[성향]') and '3PT=' in lines[j]:
                pos_roman17_end_blank = j + 1
                break
    if '#18 BOOGIE FLAND' in line:
        pos_fland18_start = idx
    if '#34 DARIUS ACUFF' in line:
        pos_acuff34_start = idx
        pos_acuff34_end = idx + 4
    if 'TIER 5' in line and 'Picks' in line:
        tier5_start = idx

print(f"pos_after_brown6={pos_after_brown6}")
print(f"pos_ament7_start={pos_ament7_start}")
print(f"pos_philon11_end_blank={pos_philon11_end_blank}")
print(f"pos_steinbach12_start={pos_steinbach12_start}")
print(f"pos_cenac14_end_blank={pos_cenac14_end_blank}")
print(f"pos_boozer15_start={pos_boozer15_start}")
print(f"pos_roman17_end_blank={pos_roman17_end_blank}")
print(f"pos_fland18_start={pos_fland18_start}")
print(f"pos_acuff34_start={pos_acuff34_start}")
print(f"pos_acuff34_end={pos_acuff34_end}")
print(f"tier5_start={tier5_start}")

# Also print lines around acuff34 to verify
if pos_acuff34_start:
    for k in range(pos_acuff34_start, pos_acuff34_start+6):
        print(f"  acuff line {k}: {lines[k]}")
