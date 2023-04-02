<?php 
namespace OmekaTheme\Helper;

use Laminas\View\Helper\AbstractHelper;

class ResourceTags extends AbstractHelper
{

    /**
     * Returns a Resource Tag HTML.
     *
     * @param object $resource The resource to add a tag to.
     * @return string
     */
    public function __invoke($resource)
    {
        if (!$resource) {
            return '';
        }

        $tagsHtml = '';

        // Resource Type Tag ('Item', 'Item set', 'Media').

        $resourceName = $resource->resourceName();

        if ($resourceName) {
            $mapResourceName = array(
                'items' => array(
                    'id' => 0,
                    'label' => 'Item'
                ),
                'item-sets' => array(
                    'id' => 1,
                    'label' => 'Item set'
                ),
                'media' => array(
                    'id' => 2,
                    'label' => 'Media'
                )
            );

            if (array_key_exists($resourceName, $mapResourceName)) {
                $tagColor = $this->getUniqueColorFromId($mapResourceName[$resourceName]['id'], 'pastel');
                $tagLabel = $mapResourceName[$resourceName]['label'];
                $tagsHtml .= '<div class="resource-tag" style="background-color: ' . $tagColor . ';">' . $tagLabel . '</div>';
            }
        }

        // Resource Class Tag.

        $resourceClass = $resource->resourceClass();

        if ($resourceClass) {
            $resourceClassId = $resourceClass->id();

            if ($resourceClassId) {
                $tagColor = $this->getUniqueColorFromId((int) $resourceClassId + 10, 'pastel'); // Offset of 10 for Resource Types.
                $tagLabel = $resource->displayResourceClassLabel();
                $tagsHtml .= '<div class="resource-tag" style="background-color: ' . $tagColor . ';">' . $tagLabel . '</div>';
            }
        }

        return $tagsHtml;
    }

    /**
     * Returns a unique random color.
     *
     * @param int $n A unique ID (used to generate a unique random color).
     * @param int $style Color style (options: 'solid', 'pastel').
     * @return string
     */
    private function getUniqueColorFromId($n, $style = 'pastel')
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
