<?php
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class ContrastColor extends AbstractHelper
{
    /**
     * Picks the best contrasting color from a list of colors for a given color.
     *
     * @param string $baseColor The base color in hex format (e.g., "#ffffff").
     * @param array $colorList An array of colors in hex format to choose from.
     * @return string The hex color code of the best contrasting color.
     */
    public function __invoke(string $baseColor, array $colorList): string
    {
        $baseRgb = $this->hexToRgb($baseColor);
        $bestContrast = 0;
        $bestColor = '';

        foreach ($colorList as $color) {
            $colorRgb = $this->hexToRgb($color);
            $contrast = $this->calculateContrast($baseRgb, $colorRgb);

            if ($contrast > $bestContrast) {
                $bestContrast = $contrast;
                $bestColor = $color;
            }
        }

        return $bestColor;
    }

    /**
     * Converts a hex color to an RGB array.
     *
     * @param string $hex The hex color code.
     * @return array An array with keys 'r', 'g', and 'b'.
     */
    private function hexToRgb(string $hex): array
    {
        $hex = ltrim($hex, '#');
        if (strlen($hex) === 3) {
            $hex = $hex[0] . $hex[0] . $hex[1] . $hex[1] . $hex[2] . $hex[2];
        }

        return [
            'r' => hexdec(substr($hex, 0, 2)),
            'g' => hexdec(substr($hex, 2, 2)),
            'b' => hexdec(substr($hex, 4, 2)),
        ];
    }

    /**
     * Calculates the contrast ratio between two RGB colors.
     *
     * @param array $rgb1 The first RGB color.
     * @param array $rgb2 The second RGB color.
     * @return float The contrast ratio.
     */
    private function calculateContrast(array $rgb1, array $rgb2): float
    {
        $l1 = $this->relativeLuminance($rgb1);
        $l2 = $this->relativeLuminance($rgb2);

        if ($l1 > $l2) {
            return ($l1 + 0.05) / ($l2 + 0.05);
        }

        return ($l2 + 0.05) / ($l1 + 0.05);
    }

    /**
     * Calculates the relative luminance of an RGB color.
     *
     * @param array $rgb The RGB color.
     * @return float The relative luminance.
     */
    private function relativeLuminance(array $rgb): float
    {
        $rgb = array_map(function ($value) {
            $value = $value / 255;
            return $value <= 0.03928 ? $value / 12.92 : pow(($value + 0.055) / 1.055, 2.4);
        }, $rgb);

        return 0.2126 * $rgb['r'] + 0.7152 * $rgb['g'] + 0.0722 * $rgb['b'];
    }
}
