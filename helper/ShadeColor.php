<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class ShadeColor extends AbstractHelper
{

    /**
     * Darken/lighten a hex color programmatically.
     *
     * @param string $color The hex color.
     * @param float $percent The shade percent.
     * @return string
     */
    public function __invoke($color, $percent)
    {
        $num = base_convert(substr($color, 1), 16, 10);
        $amt = round(2.55 * $percent);
        $r = ($num >> 16) + $amt;
        $b = ($num >> 8 & 0x00ff) + $amt;
        $g = ($num & 0x0000ff) + $amt;

        return '#'.substr(base_convert(0x1000000 + ($r<255?$r<1?0:$r:255)*0x10000 + ($b<255?$b<1?0:$b:255)*0x100 + ($g<255?$g<1?0:$g:255), 10, 16), 1);
    }
}
