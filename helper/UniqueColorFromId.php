<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class UniqueColorFromId extends AbstractHelper
{
    /**
     * Returns a pastel color.
     *
     * @param int $n A unique ID.
     * @return string
     */
    public function __invoke($n, $style = 'solid')
    {
        $n = crc32($n);
        $color = '';

        switch($style) {
            case 'solid':
                $n &= 0xffffffff;
                $color = "#" . substr("000000" . dechex($n), -6);
                break;
            
            case 'pastel':
                $color = "hsl({$n}, 100%, 87.5%)";
                break;
        }

        return $color;
    }
}
