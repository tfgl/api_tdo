let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/codage/langages/js/test/api/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
$argadd server.js
set stal=2
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabnew
tabrewind
edit src/partie.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
argglobal
balt server.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 19 - ((18 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 19
normal! 0
wincmd w
argglobal
if bufexists("routes/partie.js") | buffer routes/partie.js | else | edit routes/partie.js | endif
if &buftype ==# 'terminal'
  silent file routes/partie.js
endif
balt src/partie.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 60 - ((38 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 60
normal! 0
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
tabnext
edit src/index.js
argglobal
balt src/partie.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 010|
tabnext
edit middlewares/logger.js
argglobal
balt routes/partie.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 3 - ((2 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 3
normal! 011|
tabnext
edit src/player.js
argglobal
balt src/partie.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 89 - ((25 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 89
normal! 0
tabnext
edit ~/univ/tp/701/api/src/models/item.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
argglobal
balt src/item.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
argglobal
if bufexists("src/item.js") | buffer src/item.js | else | edit src/item.js | endif
if &buftype ==# 'terminal'
  silent file src/item.js
endif
balt ~/univ/tp/701/api/src/models/item.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 19 - ((18 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 19
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
tabnext
edit src/entity.js
argglobal
balt src/player.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 18 - ((17 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 18
normal! 013|
tabnext
edit src/map.js
argglobal
balt src/player.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 36 - ((8 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 36
normal! 031|
tabnext
edit src/endlessInventaire.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
argglobal
balt src/inventaire.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 18 - ((17 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 18
normal! 05|
wincmd w
argglobal
if bufexists("src/inventaire.js") | buffer src/inventaire.js | else | edit src/inventaire.js | endif
if &buftype ==# 'terminal'
  silent file src/inventaire.js
endif
balt src/endlessIventaire.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 9 - ((8 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 9
normal! 029|
wincmd w
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
tabnext
edit src/base.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
argglobal
balt src/batiment.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 73 - ((45 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 73
normal! 022|
wincmd w
argglobal
if bufexists("src/batiment.js") | buffer src/batiment.js | else | edit src/batiment.js | endif
if &buftype ==# 'terminal'
  silent file src/batiment.js
endif
balt src/base.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 9 - ((8 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 9
normal! 019|
wincmd w
exe 'vert 1resize ' . ((&columns * 96 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 95 + 96) / 192)
tabnext
edit src/event.js
argglobal
balt ~/univ/tp/7/701/v1ltp/src/models/event.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 170 - ((30 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 170
normal! 057|
tabnext
edit src/ennemy.js
argglobal
balt ~/univ/tp/701/api/src/models/ennemi.js
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 15 - ((14 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 15
normal! 022|
tabnext 1
set stal=1
badd +1 src/partie.js
badd +7 server.js
badd +1 src/index.js
badd +1 middlewares/logger.js
badd +0 src/player.js
badd +1 ~/univ/tp/701/api/src/models/item.js
badd +1 src/entity.js
badd +1 src/map.js
badd +1 src/endlessInventaire.js
badd +1 src/base.js
badd +1 src/event.js
badd +1 src/ennemy.js
badd +147 routes/partie.js
badd +1 src/item.js
badd +29 src/inventaire.js
badd +11 src/endlessIventaire.js
badd +12 src/batiment.js
badd +87 ~/univ/tp/7/701/v1ltp/src/models/event.js
badd +208 ~/univ/tp/701/api/src/models/ennemi.js
badd +8 routes/pratie.js
badd +270 ~/univ/tp/7/701/v1ltp/src/models/building.js
badd +17 ~/univ/tp/701/api/src/server.js
badd +63 ~/univ/tp/701/api/src/routes/partie.js
badd +2 src/tile.js
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFI
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
