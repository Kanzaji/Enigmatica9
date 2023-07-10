ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/sophisticatedbackpacks/shaped/';

    const recipes = [
        {
            output: 'sophisticatedbackpacks:upgrade_base',
            pattern: ['ABA', 'BAB', 'ABA'],
            key: {
                A: '#forge:treated_wood_slab',
                B: '#forge:nuggets/electrum'
            },
            id: 'sophisticatedbackpacks:upgrade_base'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_1',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:storage_blocks/aluminum',
                B: 'sophisticatedbackpacks:upgrade_base'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_1'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_2',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:storage_blocks/brass',
                B: 'sophisticatedbackpacks:stack_upgrade_tier_1'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_2'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_3',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:storage_blocks/osmium',
                B: 'sophisticatedbackpacks:stack_upgrade_tier_2'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_3'
        },
        {
            output: 'sophisticatedbackpacks:stack_upgrade_tier_4',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:storage_blocks/soul_steel',
                B: 'sophisticatedbackpacks:stack_upgrade_tier_3'
            },
            id: 'sophisticatedbackpacks:stack_upgrade_tier_4'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
